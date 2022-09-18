Node.js Express.js Full Course - 8 Hour
freecodecamp

What I learned:

Globals are the following:

__dirname  - path to current directory
__filename - file name
require    - function to use modules (CommonJS)
module     - info about current module (file)
process    - info about env(environment) where the program is being executed

CommonJS(library Node uses under the hood), every file is module (by default)
Modules - Encapsulated Code (only share minimum)

Synchronous - Code are executed in sequence, will not move on to next task until current is completed
Asynchronous - When code comes across a function that may take long to complete, it will offload it     and  start another task while the long one takes its time to complete

Remember the homepage of a website will usually be the address + "/", / is the homepage

If you download a repo of a project, node_modules files will not be there.
So when you open up the repo locally, go to terminal and type in "npm install"
"npm install" will download all the dependency/packages listed in there.

To uninstall a package, "npm uninstall packageName"

What is the event loop?
It's what allows Node.js to perform non-blocking I/O operations - despite the fact that JavaScript is single-threaded - by offloading operations to the system kernel whenever possible

---------------------------------------------------------------------------------------------------------

Question?

Callback functions

Node Built-in Modules

Invoking