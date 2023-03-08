const colors = require("colors");
const fs = require("fs");

const removeDuplicates = (arr) => {
    return arr.filter((item,
        index) => arr.indexOf(item) === index);
}

const isFileExists = (path, student_id) => {

    if (fs.existsSync(path)) {
        console.log(`\n--> Gread sheet of ${student_id} already exists\n`.underline.green)
        return true;
    }
    return false
}

const deleteFile = (path) => {
    try {
        fs.unlinkSync(path, (err) => {
            if (err) console.log(res);
            else console.log(`${path} Deleted Successfully`.red)
        });
        return true
    }
    catch (err) {
        return err
    }

}
const makeUrl = (student_id) => {

    const url = `https://usis.bracu.ac.bd/academia/docuJasper/index?studentId=${student_id}&reportFormat=PDF&old_id_no=${student_id}&strMessage=&scholarProgramMsg=&companyLogo=%2Fvar%2Facademia%2Fimage%2FuniversityLogo%2F1571986355.jpg&companyName=BRAC+University&headerTitle=GRADE+SHEET&companyAddress=66%2C+MOHAKHALI+C%2FA%2C+DHAKA+-+1212.&academicStanding=Satisfactory&gradeSheetBackground=%2Fbits%2Fusis%2Ftomcat%2Fwebapps%2Facademia%2Fimages%2FgradeSheetBackground.jpg&_format=PDF&_name=${student_id}&_file=student%2FrptStudentGradeSheetForStudent.jasper`;

    return url;
}

module.exports = {
    removeDuplicates,
    isFileExists,
    makeUrl,
    deleteFile
}