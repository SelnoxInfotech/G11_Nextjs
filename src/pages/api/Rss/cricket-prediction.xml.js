
export default async function handler(req, res) {
    try {
        const filePath = path.join(__dirname, '../../../../Xml/cricket-prediction.xml'); // Update the file path accordingly

        // Check if the file exists
        fs.access(filePath, fs.constants.F_OK, (err) => {
            if (err) {
                console.error(err);
                return res.status(404).send('XML file not found');
            }

            // Set headers to specify XML content and to open directly in browser
            res.set({
                'Content-Type': 'application/xml',
                // 'Content-Disposition': 'inline', // This header tells the browser to open the file instead of downloading it
            });

            // Stream the file as response
            const fileStream = fs.createReadStream(filePath);
            fileStream.pipe(res);
        });
    } catch (error) {
        console.error('Error generating RSS feed:', error);
        res.status(500).end('Internal Server Error');
    }
}