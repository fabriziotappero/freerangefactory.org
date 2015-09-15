---
layout: post
title: EMBEDDED PROGRAMMING WITH 32BIT ARM
author: Fabrizio Tappero
---

If you are interested in embedded programming and you live in the present you might just want to forget about the ancient 8-bit Arduino thing and jump straigth to ARM programming. We live in the 2015 and there is really no need to wonder about 1996 [Atmel AVR](https://en.wikipedia.org/wiki/Atmel_AVR) technology. It is in fact true that for approximately $0.77, Mouser will sell you a 50MHz 32bit ARM equiped with UART, SPI, I2C, DAC and nearly 1Mbps 7 channel ADC all packed in a 3mm by 3mm case.

To make your live easier, a gazilion of ARM chips and ARM development boards are available in the magic world of Internet; ranging from few dollars up to few tens of dollars for tons feature development boards. Open-source boards, full-fledged chip manufacturer boards do represent the ideal development platform for embedded programming. 

Regarding programming languages, compilers and debugging solutions a lot of options are available. For instance, for an average US$29 120MHz ARM Cortex M4 development board, smartly marketed [Freedom Development Board](http://cache.freescale.com/files/soft_dev_tools/doc/user_guide/FRDM-K22F-QSG.pdf), Freescale offers classic USB-based debugging and programming, mass-storage-device flash programming via open tools like [mbed.org](http://www.mbed.org), the great open-source tool gcc, the more esoteric Jlink OpenSDA method for programming and debugging via non open-source software dev. tools like KEIL MDK, Atollic TrueSTUDIO, Rowley CrossWorks and what not.

## WHERE TO BEGIN
If you are a cheapskate you might want to begin with the most popular and cheapest HW+SW solution or if you like certainty and believe big money make good stuff you might want to begin with what appears to be the industry-standard solution. If you sit in between these two extremes you might have just being left wondering.

Embedded programming happens in C/C++, any tool will actually do. Since it is 2015, and we happen to love open-source stuff, we all know that gcc is what should be used.

The hardware is a more complicated choice. At chip level, there are lots of manufacturers and different ARM chips. A set of SDK or libraries are normally available for each given ARM architecture. Developing the ability to read and understand libraries docs is a must. Most of the time however you will not really need to begin from the chip and develop your PCB but instead you will just grab an already made ARM board that has all you might want.

Naturally the choice of the development board will bind you into using a certain SDK or a certain debugging tool. A classic example is the Arduino where the often-criticized Arduino IDE was/is always presented as the tool of choice for any development. If you are like me, you might like not to close yourself into a corner by choosing a specific board or development tool. 

In the following sections I will present to you three very popular ways to succeed in the development of an ARM Embedded Development using the free vendor's software IDE, the very popular on-line compile mbed.org and the professional open-source tool gcc.

## SETTING UP THE HARDWARE AND THE SOFTWARE

Out of the many ARM boards out there we have chosen a Freescale Freedom Development Board, specifically the one with a 120MHz Cortex M4 ARM processor (ref. FRDM-K22F). The reasons why we love this board are the following:
* ARM Cortex M4, 120MHz with 500MB of flash and 128KB of RAM.
* Price tag of $29 and Worldwide availability.
* Open-source OpenSDA debug interface with mass storage device (MSD) flash programming.
* tons of peripherals, ADC  with [great documentation](http://cache.freescale.com/files/microcontrollers/doc/user_guide/FRDMK22FUG.pdf).
* Programmable with mbed.org as well as with the free Freescale Kinetis Design Studio IDE (Windows, Mac and Linux).

Before anything else you will need to buy the **FRDM-K22F board**, download the **Freescale Kinetis Design Studio IDE** for your favorite operating system as well as the Freescale SDK and have a good look [FRDM-K22F documentation](/pdf/K20P64M50SF0RM.pdf).


### Install Gcc and GDB

Under nearly and Debian-like Linux distribution you can install gcc and GDB with the following commands.

{% highlight bash %}
sudo add-apt-repository ppa:terry.guo/gcc-arm-embedded
sudo apt-get update
sudo apt-get install gcc-arm-none-eabi
{% endhighlight %}



