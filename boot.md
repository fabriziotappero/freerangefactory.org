---
layout: default
---
## BOOT Software Tool

boot is an open-source software tool based on the open-source tools **ghld** and **gtkwave** and designed to compile, simulate and synthesize your VHDL code. boot leverages the opencores.org website to allow users to freely share IP Cores.

boot is easy to use and runs on any Linux distribution. Documentation is available here. 

### Install GHDL and Gtkwave

Intall *ghld* and *gtkwave* using the following commands:

```bash
sudo add-apt-repository ppa:pgavin/ghdl
sudo apt-get update

sudo apt-get install ghdl gtkwave
```

or directly using the ghdl .deb installer and the gtkwave .deb installer.

### Download and Install boot

boot runs on most Linux distributions and it can be easily installed from its [generic Linux .bin installer](http://whub21.webhostinghub.com/~vincen17/freerangefactory.org/dl/)

Once downloaded the .zip file, you can got ahead and unzip plus install it with the following commands:

```bash
unzip boot_lin_installer.zip
sudo boot_lin_installer.bin
```

To uninstall boot you can use the command:

```bash
sudo rm -Rf /opt/boot /usr/local/bin/boot
sudo rm -Rf /usr/share/applications/boot.desktop
sudo rm -Rf /usr/share/pixmaps/boot-icon.*
```

Older versions of boot (before ver. 0.36) can be removed via the command:

```bash
sudo rm -Rf /usr/local/lib/python2.7/dist-packages/boot*
sudo rm -Rf /usr/local/bin/boot
sudo rm -Rf /usr/share/applications/boot.desktop
sudo rm -Rf /usr/share/pixmaps/boot-icon.*
```

Once you have installed boot you need to take care of its dependencies and for this you need to be connected to the Internet and run the terminal command:

```bash
sudo boot --build
```

This should install all dependencies (included GHDL) and create a launcher on your top menu bar. Double clicking on it will start boot. 
