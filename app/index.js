import 'alpinejs';
import cloneDeep from 'clone-deep';
import 'whatwg-fetch';
import { errorToast, successToast } from './toast';

window.app = () => ({
  products: {
    'men-grey-omani': {
      title: 'Men\'s Silky Omani Grey Thobe',
      description: '<ul class="pl-5 list-disc"><li>Omani style.</li><li>Quality soft grey colour fabric.</li><li>Fabric: polyester, cotton, spun.</li></ul>',
      sizes: {
        heights: [54, 56, 58],
        chest: ['M', 'L', 'XL'],
        guide: [
          ['Length', '54', '56', '58'],
          ['Chest (M)', '21', '21', '21'],
          ['Chest (L)', '23', '23', '23'],
          ['Chest (XL)', '25', '25', '25']
        ]
      },
      gallery: [
        'adult-grey/front.jpg',
        'adult-grey/front-close.jpg',
        'adult-grey/side-1.jpg',
        'adult-grey/side-2.jpg'
      ]
    },
    'men-navy-omani': {
      title: 'Men\'s Silky Omani Navy Thobe',
      description: '<ul class="pl-5 list-disc"><li>Omani style.</li><li>Quality soft navy colour fabric.</li><li>Fabric: polyester, cotton, spun.</li></ul>',
      sizes: {
        heights: [54, 56, 58],
        chest: ['M', 'L', 'XL'],
        guide: [
          ['Length', '54', '56', '58'],
          ['Chest (M)', '21', '21', '21'],
          ['Chest (L)', '23', '23', '23'],
          ['Chest (XL)', '25', '25', '25']
        ]
      },
      gallery: [
        'adult-navy/front.jpg',
        'adult-navy/front-close.jpg',
        'adult-navy/side-1.jpg',
        'adult-navy/back.jpg'
      ]
    },
    'men-white-omani': {
      title: 'Men\'s Silky Omani White Thobe',
      description: '<ul class="pl-5 list-disc"><li>Omani style.</li><li>Quality soft white colour fabric.</li><li>Korean fabric: Polyester, Cotton, Spun.</li></ul>',
      sizes: {
        heights: [54, 56, 58],
        chest: ['M', 'L', 'XL'],
        guide: [
          ['Length', '54', '56', '58'],
          ['Chest (M)', '21', '21', '21'],
          ['Chest (L)', '23', '23', '23'],
          ['Chest (XL)', '25', '25', '25']
        ]
      },
      gallery: [
        'men-white-omani/front.jpg'
      ]
    },
    'men-black-omani': {
      title: 'Men\'s Omani Black Thobe',
      description: '<ul class="pl-5 list-disc"><li>Omani style.</li><li>Quality black navy colour fabric.</li><li>Fabric: Cotton.</li><li>Note: this is not a silky thobe.</li></ul>',
      sizes: {
        heights: [54, 56, 58],
        chest: ['M', 'L', 'XL'],
        guide: [
          ['Length', '54', '56', '58'],
          ['Chest (M)', '21', '21', '21'],
          ['Chest (L)', '23', '23', '23'],
          ['Chest (XL)', '25', '25', '25']
        ]
      },
      gallery: [
        'men-black-omani/front.jpg'
      ]
    },
    'men-black-saudi': {
      title: 'Men\'s Saudi Collar Black Thobe',
      description: '<ul class="pl-5 list-disc"><li>Nice soft fabric in black colour.</li><li>Lightweight and comfortable to wear.</li><li>Double neck button and round sleeves.</li><li>One front pocket and two side pockets.</li><li>Easy to wash and iron.</li></ul>',
      sizes: {
        heights: [52, 54, 56, 58, 60],
        chest: ['M', 'L', 'XL'],
        guide: [
          ['Length', '54', '56', '58'],
          ['Chest (M)', '20', '20', '20'],
          ['Chest (L)', '22', '22', '22'],
          ['Chest (XL)', '24', '24', '24']
        ]
      },
      gallery: [
        'adult-black-with-collar/front.jpg',
        'adult-black-with-collar/front-close-1.jpg',
        'adult-black-with-collar/front-close-2.jpg',
        'adult-black-with-collar/side-1.jpg'
      ]
    },
    'men-white-saudi': {
      title: 'Men\'s Saudi Collar White Thobe',
      description: '<ul class="pl-5 list-disc"><li>Nice soft fabric in white colour.</li><li>Lightweight and comfortable to wear.</li><li>Double neck button and round sleeves.</li><li>One front pocket and two side pockets.</li><li>Easy to wash and iron.</li></ul>',
      sizes: {
        heights: [52, 54, 56, 58, 60],
        chest: ['M', 'L', 'XL'],
        guide: [
          ['Length', '54', '56', '58'],
          ['Chest (M)', '20', '20', '20'],
          ['Chest (L)', '22', '22', '22'],
          ['Chest (XL)', '24', '24', '24']
        ]
      },
      gallery: [
        'adult-white-with-collar/front.jpg',
        'adult-white-with-collar/front-close.jpg',
        'adult-white-with-collar/side-1.jpg'
      ]
    },
    'men-moroccan-djellaba': {
      title: 'Men\'s Moroccan Djellaba',
      description: '<ul class="pl-5 list-disc"><li>Available in Red and Purple</li><li>Fabric: cotton</li></ul>',
      sizes: {
        heights: [],
        chest: ['M', 'L', 'XL']
      },
      gallery: [
        'men-moroccan-djellaba/back.jpg'
      ]
    },
    'men-moroccan-plain-gandoura': {
      title: 'Men\'s Plain Short Sleeved Moroccan Gandoura',
      description: '<ul class="pl-5 list-disc"><li>Available in Black and Green</li><li>Perfect for the summer!</li><li>Fabric: Cotton</li></ul>',
      sizes: {
        heights: [],
        chest: ['M', 'L', 'XL']
      },
      gallery: [
        'men-moroccan-gandoura/black.jpg'
      ]
    },
    'men-moroccan-striped-gandoura': {
      title: 'Men\'s Stripy Short Sleeved Moroccan Gandoura',
      description: '<ul class="pl-5 list-disc"><li>Available in Plum and White</li><li>Perfect for the summer!</li><li>Fabric: Silky Cotton</li></ul>',
      sizes: {
        heights: [],
        chest: ['M', 'L', 'XL']
      },
      gallery: [
        'men-moroccan-gandoura/white.jpg'
      ]
    },
    'boys-black-omani': {
      title: 'Boy\'s Silky Omani Black Thobe',
      description: '<p>Omani style black thobe/jubbah for boys. Korean fabric has been used to give a better finish to the product and also to give it durability.</p><p>Sizes available from 32-50, suitable for children from the ages of 4 to 14.</p>',
      sizes: {
        heights: [],
        chest: []
      },
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
      title: 'Boy\'s Silky Omani Black Thobe',
      description: '<p>Omani style white thobe/jubbah for boys. Korean fabric has been used to give a better finish to the product and also to give it durability.</p><p>Sizes available from 32-50, suitable for children from the ages of 4 to 14.</p>',
      sizes: {
        heights: [],
        chest: []
      },
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
    items: []
  },
  addItemToCurrentProduct() {
    this.currentProduct.items = [
      ...this.currentProduct.items,
      {
        _id: uuidv4(),
        count: 1,
        height: this.products[this.currentProduct.id].sizes
          ? this.products[this.currentProduct.id].sizes.heights[0]
          : null,
        chest: this.products[this.currentProduct.id].sizes
          ? this.products[this.currentProduct.id].sizes.chest[0]
          : null
      }
    ];
  },
  removeItemFromCurrentProduct(item) {
    this.currentProduct.items = this.currentProduct.items.filter(i => i._id !== item._id);
  },
  form: {
    name: '',
    email: '',
    phone: '',
    loading: false,
    reset() {
      this.name = '';
      this.email = '';
      this.phone = '';
      this.loading = false;
    }
  },
  productModalOpen: false,
  openProductModal(id) {
    const productItem = this.cart.find(p => p.id === id);
    this.currentProduct = {
      id,
      title: this.products[id].title,
      description: this.products[id].description,
      items: productItem ? cloneDeep(productItem.items) : []
    };

    const $gallery = document.getElementById('gallery');

    $gallery.innerHTML = this.products[id].gallery.map((src, index) => `
      <a data-download-url="false" href="images/${src}" class="block relative ${index !== 0 ? 'hidden' : ''}">
        <svg
          class="fill-current text-white w-8 h-8 absolute z-10"
          style="top: 50%; left: 50%; transform: translate(-50%, -50%);"
          viewBox="0 0 20 20">
          <path d="M12.323,2.398c-0.741-0.312-1.523-0.472-2.319-0.472c-2.394,0-4.544,1.423-5.476,3.625C3.907,7.013,3.896,8.629,4.49,10.102c0.528,1.304,1.494,2.333,2.72,2.99L5.467,17.33c-0.113,0.273,0.018,0.59,0.292,0.703c0.068,0.027,0.137,0.041,0.206,0.041c0.211,0,0.412-0.127,0.498-0.334l1.74-4.23c0.583,0.186,1.18,0.309,1.795,0.309c2.394,0,4.544-1.424,5.478-3.629C16.755,7.173,15.342,3.68,12.323,2.398z M14.488,9.77c-0.769,1.807-2.529,2.975-4.49,2.975c-0.651,0-1.291-0.131-1.897-0.387c-0.002-0.004-0.002-0.004-0.002-0.004c-0.003,0-0.003,0-0.003,0s0,0,0,0c-1.195-0.508-2.121-1.452-2.607-2.656c-0.489-1.205-0.477-2.53,0.03-3.727c0.764-1.805,2.525-2.969,4.487-2.969c0.651,0,1.292,0.129,1.898,0.386C14.374,4.438,15.533,7.3,14.488,9.77z"></path>
        </svg>
        <img
          style="width: 150px;"
          src="images/${src}"
        />
        <div class="overlay"></div>
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
    this.productModalOpen = false;

    const productItem = this.cart.find(p => p.id === this.currentProduct.id);

    const items = cloneDeep(this.currentProduct.items);

    if (items.length === 0) {
      return;
    }

    if (productItem) {
      productItem.items = items;
    } else {
      this.cart.push({
        id: this.currentProduct.id,
        items
      });
    }

    successToast('Added product item to cart.');

    setCart(this.cart);
  },
  removeProductFromCart(id) {
    this.cart = this.cart.filter(p => p.id !== id);
    setCart(this.cart);
  },
  reserveOrder() {
    this.form.loading = true;

    fetch('https://zu9s3r7y43.execute-api.eu-west-1.amazonaws.com/dev/house-of-thobes-mailer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.form.name,
        email: this.form.email,
        phone: this.form.phone,
        order: this.cart.map(productItem => ({
          title: this.products[productItem.id].title,
          items: productItem.items
        }))
      })
    }).then(_ => {
      successToast('We successfully received your order! We will contact you as soon as possible.');

      this.form.reset();
      this.cart = [];
      setCart(this.cart);
    }).catch(_ => {
      errorToast('We could not process your order.');

      this.form.loading = false;
    });
  }
});

function getCart() {
  const cart = localStorage.getItem('house-of-thobes-cart');

  return cart ? JSON.parse(cart) : [];
}

function setCart(cart) {
  localStorage.setItem('house-of-thobes-cart', JSON.stringify(cart));
}

function range(size, startAt = 0) {
  return [...Array(size).keys()].map(i => i + startAt);
}

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
