const views = [134, 86730, 1290, 13]

const total = views.reduce((total, view) => {
    return total + view;
})

// Above is how to get the total of views using a reduce function

// let total = 0
// for (let view of views) {
//     total += price
// }
// console.log(total)

// above is how to get the total using a different way

const maxViews = views.reduce((max, view) => {
    if(view > max) {
        return view;
    }
    return max; 
})

// above is how to get the video with max views,
// the same can be done with the min by flipping the > to a <