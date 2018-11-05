# Installing TypeScript

This is a skeleton app for people who want to use TypeScript. A Vagrantfile is included for those who want to run it in a virtual machine.

You don't have to use the Vagrantfile if you're fine with installing NodeJS and NPM locally. Feel free to delete it if that's the case.

## Instructions (no VM)

1. Download NodeJS + NPM: https://nodejs.org/en/download/. Versions shouldn't really matter but we'll use the LTS release throughout this course.
2. Open a terminal window (command prompt, git bash, powershell)
3. Check if NodeJS is installed by typing `node --version` into the terminal. It should print a line with something like `v8.12.0`.
4. Check if NPM is installed by typing  `npm --version` into the terminal. It should print a line with something like `6.4.1`.
5. Install TypeScript by typing `npm install -g typescript`. If Windows asks for admin permission, grant it.
6. Check if TypeScript is installed by typing `tsc --version` into the terminal. It should print a line with something like `Version 3.1.1`.
7. Open the `tsconfig.json` file in this project.
8. Search the [TypeScript documentation](https://www.typescriptlang.org/docs/home.html) and try to explain every line in the json file. Don't understand something? That's fine! Just don't copy stuff for the sake of filling up your answers.

## Instructions (VM)

If you're like me and you dislike NodeJS and NPM piling up heaps of folders on your pc, run TypeScript in a virtual machine!

1. Install a virtual machine host, Virtualbox is fine: https://www.virtualbox.org/wiki/Downloads
2. Probably restart
3. Install Vagrant: https://www.vagrantup.com/downloads.html
4. Probably restart (sorry!)
5. Open a terminal window (Administrator Powershell on Windows)
6. Move to this folder
7. If on Virtualbox: install [Vagrant VB-Guest](https://github.com/dotless-de/vagrant-vbguest) (Only if you're using Virtualbox. If you're using a different host, it's up to you to set up shared folders)
8. Open the Vagrantfile and set up your directory paths. Defaults are fine if you don't know what you're doing.
8. Install the VM by typing `vagrant up`
9. Wait until done. This can take up to 15 minutes, depending on internet and HDD speed. Sometimes the provision will fail because of firewalls. This should mostly be fine, as long as you can see that NodeJS and NPM are installed.
10. Enter the VM by typing `vagrant ssh`
11. In the VM, enter the correct folder for your project (default: `cd /code`)
12. **IMPORTANT**: When you're done in the VM, exit it by typing `exit` and then `vagrant halt` into the terminal. This makes sure the VM shuts down cleanly. If you don't need the VM anymore, type `exit` and then `vagrant destroy`. **Never** close the terminal without shutting down the VM, unless you know what you're doing.
13. Open the `tsconfig.json` file in this project.
14. Search the [TypeScript documentation](https://www.typescriptlang.org/docs/home.html) and try to explain every line in the json file. Don't understand something? That's fine! Just don't copy stuff for the sake of filling up your answers.
