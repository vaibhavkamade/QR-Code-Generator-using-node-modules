import fs from "fs";
import inquirer from "inquirer";
import qr from "qr-image";

inquirer
.prompt([
    {
        message:"Enter Your URL : ",
        name:"URL",
    }
])

.then((answer)=>{
    const url = answer.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));

    fs.writeFile("URL.txt",url,(err)=>{
        if(err) throw err;
        console.log("The file has been saved successfully !!")
    });

})

.catch(()=>{
    console.log("Error occured !")
})