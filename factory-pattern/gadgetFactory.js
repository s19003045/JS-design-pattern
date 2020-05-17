const Laptop = require('./laptop')
const Tablet = require('./tablet')

const gadget = { Laptop, Tablet }
//上面程式碼相當於 const gadget = { Laptop: Laptop, Tablet: Tablet }
//或 const gadget = { 'Laptop': Laptop, 'Tablet': Tablet }

/**
建立一個實例的方式如下：
const tablet = new gadget.Laptop({})
// 或者const tablet = new gadget['Laptop']({})  

console.log(tablet)  // print: Laptop { ram: 0, hdd: 0, name: '' }
 */

module.exports = {
  createGadget(type, attributes) {
    const GadgetType = gadget[type];
    return new GadgetType(attributes);
  }
};