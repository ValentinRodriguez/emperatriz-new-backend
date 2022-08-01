import { v4 as uuidv4 } from 'uuid';
import * as fs from 'fs/promises';

export const receiveFile = async (file: any) => {
    try {
        if (!imageFileFilter(file)) {
          throw new Error('Only image files are allowed!');
        } 
        const newfileName = newFileName(file);
        const { createReadStream } = file;
  
        const stream = createReadStream();
        const chunks = [];
  
        let buffer = await new Promise<Buffer>((resolve, reject) => {
          let buffer: Buffer;
  
          stream.on('data', function (chunk) {
            chunks.push(chunk);
          });
  
          stream.on('end', function () {
            buffer = Buffer.concat(chunks);
            resolve(buffer);
          });
  
          stream.on('error', reject);
        });
  
        buffer = Buffer.concat(chunks);
  
        // const base64 = buffer.toString('base64');
        // const base64Image = `data:image/jpeg;base64,${base64}`;

        const filepath = `./uploads/${newfileName}`;
        
        if (!await fileExists('./uploads/')) {
            await fs.writeFile(filepath, buffer);
        }else{
            await fs.mkdir('./uploads', { recursive: true });  
            await fs.writeFile(filepath, buffer)
        }  
  
        return filepath;
      } catch (err) {        
        return err;
      }
}

export const fileExists = async (filePath: string) => {
    try {
        await fs.access(filePath);
        return true;
    } catch (err) {
        return err;
    }
}

export const imageFileFilter = (file: any) => {
    const fileTypes = ['image/png', 'image/jpeg', 'image/jpg'];
    return fileTypes.includes(file.mimetype);
};

export const newFileName = ( file: any) =>{
    const splitNamed = file.filename.split('.')
    const fileExtName =  splitNamed[splitNamed.length - 1];
    const randomName = uuidv4();
    const name = new Date().getTime();
   
    return `${name}-${randomName}.${fileExtName}`
}