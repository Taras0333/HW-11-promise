function getRandomChinese(length){
    return new Promise((resolve, reject) => {
        if (length <= 0) {
            reject();
        } else {

         /*   const date = Date.now() + '';
            console.log(date);
            let dateFive = '';
            dateFive = date.substr(-5);
            console.log(dateFive);
            let char = '';*/
            let char = '';
            for(let i = 0; i <= length -1; i++){
                const date = Date.now() + '';

                let dateFive = '';
                dateFive = date.substr(-5);
                console.log(dateFive);

                char += String.fromCharCode(dateFive);
                console.log(char);
                resolve();
            }
            setTimeout(() => {
              const element =  document.createElement('div');
                element.innerText = 'result: ' + char;
                document.body.append(element);
              },50 * length)

        }
        })



}
getRandomChinese(5).then(()=>{
    console.log('here you are');
}).catch(()=>{
    console.log('something went wrong, maybe you enter a number lower or equal to 0');
})
