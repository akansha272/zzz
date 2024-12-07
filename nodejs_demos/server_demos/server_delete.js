const http = require('http');
const url = require('url'); // To parse the request URL
const querystring = require('querystring'); // To parse the query string of the request URL

// Data store for simplicity (in-memory)
let data = ['product 1', 'product 2', 'product 3'];

// Create the HTTP server
const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true); // Parse the URL
    const pathname = parsedUrl.pathname; // Get the pathname of the URL
    const query = parsedUrl.query; // Get the query parameters

    // Handling GET request to display the current products
    if (pathname === '/' && req.method === 'GET') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>Product List</h1>');
        res.write('<ul>');
        data.forEach((product) => {
            res.write(`<li>${product}</li>`);
        });
        res.write('</ul>');
        res.end();
    }

    // Handling DELETE request to remove a product
    else if (pathname === '/delete' && req.method === 'DELETE') {
        const productToDelete = query.product; // Get the product to delete from the query string

        if (productToDelete) {
            // Find the product in the data array and remove it
            const index = data.indexOf(productToDelete);
            if (index > -1) {
                data.splice(index, 1); // Remove the product
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(`<h1>${productToDelete} has been removed from the product list.</h1>`);
            } else {
                res.writeHead(404, {'Content-Type': 'text/html'});
                res.write(`<h1>Product not found: ${productToDelete}</h1>`);
            }
        } else {
            res.writeHead(400, {'Content-Type': 'text/html'});
            res.write('<h1>Error: No product specified for deletion.</h1>');
        }
        res.end();
    }

    // Handling unsupported routes or methods
    else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write('<h1>404 Not Found</h1>');
        res.end();
    }
});

// Start the server
server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
