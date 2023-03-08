const fs = require("fs");
const Downloader = require("nodejs-file-downloader");
const { st_list } = require("./student_ids");
const colors = require("colors");
const { isFileExists, makeUrl, deleteFile } = require("./util");


const getPdf = async (student_id, folder = "files") => {


    const path = `./${folder}/${student_id}.pdf`;

    if (isFileExists(path, student_id)) return

    const url = makeUrl(student_id);

    const cookie = "D6C6133CE1F9C725E478F6F7D28EC90E";
    const headers = {
        Cookie: `JSESSIONID=${cookie};`
    }

    const downloader = new Downloader({
        url,
        directory: `./${folder}`,
        headers
    });

    let fPath;
    try {
        const { filePath } = await downloader.download();
        fPath = filePath
        if (filePath === path) {
            console.log(`${student_id} ---> Download Complete`.green)
        }
        else {
            const isDeleted = deleteFile(filePath)
            if (isDeleted !== true) console.log(isDeleted);

            console.log(`Retrying download for --> ${student_id}`.rainbow)
            getPdf(student_id);
        }
    } catch (error) {
        console.log(`${student_id} ---> Download Failed`.red);
        getPdf(student_id);
    }
}


    st_list.forEach(student_id => {
        getPdf(student_id)
    });

console.log("--------------------------------------------->>>")