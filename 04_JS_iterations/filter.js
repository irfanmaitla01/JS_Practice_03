const mynum = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

const NewNum = mynum.filter( (num) => num >12)
console.log(NewNum);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   const MyBooks = books.filter( (bks) => bks.genre === 'Non-Fiction' )
//   console.log(MyBooks);                                    // its work

const MyBooks = books.filter( (bks) => bks.publish >=1900 && bks.genre==='History' )
// const MyBooks = books.filter( (bks) => { return bks.publish >=2000} )  //if we use scope{} then 'return' variable use
console.log(MyBooks);