import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'Diverse Gadget Selection',
    text:
      "Dive into a world of possibilities with our vast selection of gadgets. From the latest smart devices to innovative tech accessories, discover a diverse range of products",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'Effortless Shopping Experience',
    text:
      "Enjoy a hassle-free and enjoyable shopping experience with us. Our user-friendly interface and seamless checkout process make it easy for you to find, select, and purchase your favorite gadgets",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'Exclusive Deals and Discounts',
    text:
      "Unlock unbeatable value with our exclusive deals and discounts. We believe in making cutting-edge technology accessible to everyone,discover special promotions and limited-time offers",
  },
]

export const products_url = '/.netlify/functions/products'

export const single_product_url = `/.netlify/functions/single-product?id=`
