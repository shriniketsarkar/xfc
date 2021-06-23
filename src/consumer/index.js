import Consumer from './consumer';

// if (!Object.entries) {
//   Object.entries = function (obj) {
//     const ownProps = Object.keys(obj);
//     let i = ownProps.length;
//     const resArray = new Array(i); // preallocate the Array
//     while (i) {
//       resArray[i] = [ownProps[i], obj[ownProps[i]]];
//       i -= 1;
//     }

//     return resArray;
//   };
// }

export default new Consumer();
