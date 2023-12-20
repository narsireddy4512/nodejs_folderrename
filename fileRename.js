const fs = require("fs");
const path = require("path");

const oldDirectoryName = 'C:/Users/NChalla/Downloads/learnings/NodeJS';
const newDirectoryName = 'C:/Users/NChalla/Downloads/learnings/NodeJS_learnings';

const fileRename = () => {
    if (fs.existsSync(oldDirectoryName)) {
        fs.rename(oldDirectoryName, newDirectoryName, (error) => {
            if (error) {
                console.error('Error renaming the directory:', error);
            } else {
                console.log('Directory renamed successfully!');
            }
        });
    } else {
        console.error('Old directory does not exist.');
    }
};

fileRename();
