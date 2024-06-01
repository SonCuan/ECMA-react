// callback Gọi lại là một function sẽ được thực thi sau khi một function khác đã được thực thi xong
function quaMon(quaMon) {
    setTimeout(() => {
         console.log("qua Mon");   
         quaMon();
    }, 6000);
}

function totNgiep(quaMon){
    setTimeout(() => {
        console.log("Tot Nghiep");
        quaMon();
        },3000);
}
function kiemTien(quaMon){
    setTimeout(() => {
        console.log("Mua nha")
        quaMon();
    }, 2000);
}

quaMon (() => {
   totNgiep(() => {
    kiemTien(() => { 
        console.log("all done")
    })
   })
});

// Cach 2: Promise.

// taskA()
// 	.then(() => taskB())
// 	.then(() => taskC())
// 	.then(() => {
// 		console.log("All Done");
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});

// Cach 3: Async/Await
async function runTask() {
	try {
		await taskA();
		await taskB();
		await taskC();
		console.log("Da lam xong het cong viec!");
	} catch (error) {
		console.log(error);
	}
}

// runTask();