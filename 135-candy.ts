function candy(ratings: number[]): number {
  const n = ratings.length;
  const d = Array.from(ratings).fill(1);

  for (let i = 1; i < n; i++) {
    if (ratings[i - 1] < ratings[i]) {
      d[i] = d[i - 1] + 1;
    }
  }

  for (let i = n - 2; i >= 0; i--) {
    if (ratings[i + 1] < ratings[i]) {
      d[i] = Math.max(d[i + 1] + 1, d[i]);
    }
  }

  console.log('\n');
  console.log('Rating  : ', ratings);
  console.log('Candles : ', d);

  const sum = d.reduce((acc, item) => acc + item, 0);

  console.log('Sum     : ', sum);
  return sum;
}

// [4,5,4,5,6,7,8,1,9,8]

// peakIndex = 0
// increasing
// i = 2

// 4, 5 - increasing = 1,2 = 3

// peakIndex = 2
// increasing
// i = 7

// 4, 5, 6, 7, 8 - increasing = 1,2,3,4,5 = 15
// increasing

// peakIndex = 7
// increasing

// 1, 9 = 1,2 = 3

// 1

// [1,2,3,2,4,2,3]

// 1,2,3 - inc = 6

// 2, 4 - inc = 3

// 2, 3 - inc = 3

// [1,2,3,10,5,4,3,2]

// 1, 2, 3, 10 = 1,2,3,4

// 10, 5, 4, 3, 2 = 5, 4, 3, 2, 1

// [1,1,1,1,5,5,2]

// [1,1,1,1,2,1,2]

candy([1, 2, 2]);
candy([1, 2, 3, 4, 5, 2, 1, 1, 2, 1]); // 1,2,3,4,5
candy([2, 1, 1, 2, 1]);
candy([2]);
candy([1, 2]);
candy([2, 1]);
candy([2, 1, 2]);

// function candy(ratings: number[]): number {
//   const d = Array.from(ratings).fill(0);
//   d[0] = 1;

//   // const min = 0;
//   let dir = 0;
//   let sm = 0;
//   let sum = 0;
//   let index = 0;
//   let prev = 1;

//   for (let i = 1; i < ratings.length; i++) {
//     const currentDir = ratings[i - 1] > ratings[i];

//     if (ratings[i - 1] === ratings[i]) {
//       sum += prev;
//     } else if (ratings[i - 1] > ratings[i]) {
//       // going down
//       if (dir > 0) {
//         // going through the peak
//         prev = 1;
//         sum += 1;
//         index = i;
//       } else {
//         sum += i - index + prev;
//         prev++;
//         d[i] = d[i - 1] + 1;
//       }

//       dir = -1;
//     } else if (ratings[i - 1] < ratings[i]) {
//       // going up
//       if (dir < 0) {
//         d[i] = 1;
//       } else {
//         d[i] = d[i - 1] + 1;
//       }

//       dir = 1;
//     }
//   }

//   return 1;
// }

// 0
// 1
// 2 1

// candy([3, 2, 1, 1, 3]); // 3, 2, 1, 1, 2
// candy([3, 2, 2, 1, 1, 3]); // 3, 2, 2, 1, 1, 2

// // 1 1

// // [3,2,1,1,3]

// // [3,2,1,1] - 3, 2, 1, 1
// // [3] - 2

// // [4,5,4,5,6,7,8,1,9,8]
// // [4,5] - 1,2
// // [4,5,6,7,8] - 1,2,3,4,5
// // [1,9] - 1, 2
// // [8] - 1
