import 'alpinejs';
import toastr from 'toastr';

const getCart = () => {
  const cart = localStorage.getItem('house-of-thobes-cart');

  return cart ? JSON.parse(cart) : [];
};

const setCart = cart => {
  localStorage.setItem('house-of-thobes-cart', JSON.stringify(cart));
};

window.app = () => ({
  products: {
    'men-grey-omani': {
      title: 'Men\'s grey Omani thobe',
      description: '<ul class="pl-5 list-disc"><li>Omani style.</li><li>Quality soft grey colour fabric.</li><li>Fabric: polyester, cotton, spun.</li></ul>',
      gallery: [
        'adult-grey/front.jpg',
        'adult-grey/front-close.jpg',
        'adult-grey/side-1.jpg',
        'adult-grey/side-2.jpg'
      ]
    },
    'men-navy-omani': {
      title: 'Men\'s navy Omani thobe',
      description: '<ul class="pl-5 list-disc"><li>Omani style.</li><li>Quality soft navy colour fabric.</li><li>Fabric: polyester, cotton, spun.</li></ul>',
      gallery: [
        'adult-navy/front.jpg',
        'adult-navy/front-close.jpg',
        'adult-navy/side-1.jpg',
        'adult-navy/back.jpg'
      ]
    },
    'men-black-saudi': {
      title: 'Men\'s black Saudi collar thobe',
      description: '<ul class="pl-5 list-disc"><li>Nice soft fabric in black colour.</li><li>Lightweight and comfortable to wear.</li><li>Double neck button and round sleeves.</li><li>One front pocket and two side pockets.</li><li>Easy to wash and iron.</li></ul>',
      gallery: [
        'adult-black-with-collar/front.jpg',
        'adult-black-with-collar/front-close-1.jpg',
        'adult-black-with-collar/front-close-2.jpg',
        'adult-black-with-collar/side-1.jpg'
      ]
    },
    'men-white-saudi': {
      title: 'Men\'s white Saudi collar thobe',
      description: '<ul class="pl-5 list-disc"><li>Nice soft fabric in white colour.</li><li>Lightweight and comfortable to wear.</li><li>Double neck button and round sleeves.</li><li>One front pocket and two side pockets.</li><li>Easy to wash and iron.</li></ul>',
      gallery: [
        'adult-white-with-collar/front.jpg',
        'adult-white-with-collar/front-close.jpg',
        'adult-white-with-collar/side-1.jpg'
      ]
    },
    'boys-black-omani': {
      title: 'Boys black Omani thobe',
      description: '<p>Omani style black thobe/jubbah for boys. Korean fabric has been used to give a better finish to the product and also to give it durability.</p><p>Sizes available from 32-50, suitable for children from the ages of 4 to 14.</p>',
      gallery: [
        'children-b-side.jpg',
        'child-black/front.jpg',
        'child-black/front-close.jpg',
        'teen-black/front.jpg',
        'teen-black/front-close.jpg',
        'teen-black/back.jpg'
      ]
    },
    'boys-white-omani': {
      title: 'Boys white Omani thobe',
      description: '<p>Omani style white thobe/jubbah for boys. Korean fabric has been used to give a better finish to the product and also to give it durability.</p><p>Sizes available from 32-50, suitable for children from the ages of 4 to 14.</p>',
      gallery: [
        'teen-white/front.jpg',
        'teen-white/front-close.jpg',
        'teen-white/side-1.jpg',
        'teen-white/side-2.jpg'
      ]
    }
  },
  cart: getCart(),
  currentProduct: {
    id: '',
    title: '',
    description: '',
    count: 1
  },
  form: {
    name: '',
    email: '',
    phone: '',
    reset() {
      this.name = '';
      this.email = '';
      this.phone = '';
    }
  },
  productModalOpen: false,
  openProductModal(id) {
    const productItem = this.cart.find(p => p.id === id);
    this.currentProduct = {
      id,
      title: this.products[id].title,
      description: this.products[id].description,
      count: productItem ? productItem.count : 1
    };

    const $gallery = document.getElementById('gallery');

    $gallery.innerHTML = this.products[id].gallery.map(src => `
      <a href="images/${src}" class="border-2 border-gold-300 mr-2">
        <img
          style="width: 100px;"
          src="images/${src}"
        />
      </a>
    `).join('');

    lightGallery($gallery);

    this.productModalOpen = true;
  },
  closeProductModal() {
    this.productModalOpen = false;
  },
  getProductItemTitle(id) {
    return this.products[id].title;
  },
  saveProductToCart() {
    toastr.success('Added product item to cart.');

    this.productModalOpen = false;

    const productItem = this.cart.find(p => p.id === this.currentProduct.id);

    if (productItem) {
      productItem.count = this.currentProduct.count;
    } else {
      this.cart.push({
        id: this.currentProduct.id,
        count: this.currentProduct.count
      });
    }

    setCart(this.cart);
  },
  removeProductFromCart(id) {
    this.cart = this.cart.filter(p => p.id !== id);
    setCart(this.cart);
  },
  reserveOrder() {
    axios.post('https://zu9s3r7y43.execute-api.eu-west-1.amazonaws.com/dev/house-of-thobes-mailer', {
      name: this.form.name,
      email: this.form.email,
      phone: this.form.phone,
      order: this.cart.map(item => ({
        title: this.products[item.id].title,
        count: item.count
      }))
    }).then(_ => {
      toastr.success('We successfully received your order! We will contact you as soon as possible.');

      this.form.reset();
      this.cart = [];
      setCart(this.cart);
    }).catch(_ => {
      toastr.error('We could not process your order.');
    });
  }
});
