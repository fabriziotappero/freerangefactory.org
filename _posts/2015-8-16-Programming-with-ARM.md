---
layout: post
title: EMBEDDED PROGRAMMING WITH 32BIT ARM
author: Fabrizio Tappero
---

If you are interested in embedded programming and you live in the present you might just want to forget about the ancient 8-bit Arduino thing and jump straigth to ARM programming. We live in the 2015 and there is really no need to wonder about 1996 [8-bit Atmel AVR](https://en.wikipedia.org/wiki/Atmel_AVR) technology. It is in fact true that for approximately $0.77, Mouser will sell you a 50MHz 32bit ARM equiped with UART, SPI, I2C, DAC and nearly 1Mbps 7 channel ADC all packed in a 3mm by 3mm case.

To make your life easier, a gazilion of ARM chips and ARM development boards are available in the Internet; ranging from few dollars up to few tens of dollars for tons of features boards. Open-source boards, full-fledged chip manufacturer boards do represent the ideal development platform for embedded programming. 

Regarding programming languages, compilers and debugging solutions a lot of options are available. For instance, for an average US$29 120MHz ARM Cortex M4 development board, smartly marketed [Freedom Development Board](http://cache.freescale.com/files/soft_dev_tools/doc/user_guide/FRDM-K22F-QSG.pdf), Freescale offers classic USB-based debugging and programming, mass-storage-device flash programming via open tools like [mbed.org](http://www.mbed.org), the great open-source tool gcc, the more esoteric Jlink OpenSDA method for programming and debugging via non open-source software dev. tools like KEIL MDK, Atollic TrueSTUDIO, Rowley CrossWorks and what not.

## WHERE TO BEGIN
If you are a cheapskate you might want to begin with the most popular and cheapest HW+SW solution or if you like certainty and believe big money make good stuff you might want to begin with what appears to be the industry-standard solution. If you sit in between these two extremes you might have just being left wondering. Please keep reading.

Embedded programming happens in C/C++ and any dev. tool will actually do. Since I love to take advantage of good stuff and I happen to love open-source stuff, we all know that the GNU C Compile (GCC) is really the way to go. Also, I personally do not like to fall in love with any particular software tool and if I can choose the simplest one for the job, I do it. Even better when I just need to install very little software or use web-based tools.

The hardware is a more complicated choice. At chip level, there are lots of manufacturers and different ARM chips. A set of SDK or libraries are normally available for each given ARM architecture. Developing the ability to read and understand libraries docs is a must. Most of the time however you will not really need to begin from the chip and develop your PCB but instead you will just grab an already made ARM dev. board that has all you might want.

Naturally the choice of the development board will bind you into using a certain SDK or a certain debugging tool. A classic example is the Arduino where the often-criticized Arduino IDE was/is always presented as the tool of choice for any development. If you are like me, you might like not to close yourself into a corner by choosing a specific software tool or a specific dev. board. 

In the following sections I will present to you three very popular ways to succeed in the development of an ARM Embedded Development using the free web-based compile at mbed.org and a great Freescale ARM board.

## SETTING UP THE HARDWARE AND THE SOFTWARE
Out of the many ARM boards out there we like and we have chosen a Freescale Freedom Development Board, specifically the one with a 120MHz Cortex M4 ARM processor (ref. FRDM-K22F). The reasons why we love this board are the following:

* ARM Cortex M4, 120MHz with 500kB of flash and 128KB of RAM and tons of periperals.
* Price tag of $29 and Worldwide availability.
* Open-source OpenSDA debug interface with mass storage device (MSD) flash programming.
* tons of peripherals, ADC  with [great documentation](http://cache.freescale.com/files/microcontrollers/doc/user_guide/FRDMK22FUG.pdf).
* Programmable with mbed.org as well as with the free Freescale Kinetis Design Studio IDE (Windows, Mac and Linux).

Another great aspect of the FRDM-K22F board is that it actually hosts two ARMs. Next to the main Freescal K22 ARM MCU there is a second smalled K20 ARM MCU that can be easily programmed too and act as **OpenSDA** debugger allowing you to easily and openly debug the main K22 MCU or any external Freescale MCU via the SWD connector.

$29 for a Worldwide-available 120MHz ARM board equipped with tons of peripherals, an open-source 
debugger, a super easy drag and drop programming method and 300MB of open-source  SDK is really something hard to beat.

Before anything else you will need to buy the **FRDM-K22F board**, download the **Freescale Kinetis Design Studio IDE** for your favorite operating system as well as the Freescale SDK and have a quick look at the [FRDM-K22F documentation](/pdf/K20P64M50SF0RM.pdf).


### ARM PROGRAMMING SOFTWARE
If you want to get up and running right away it is a good idea to go for a web-based ARM development environment. Even better to go for a free one.

Just head to the [developer mbed.org ](https://developer.mbed.org/accounts/login/) create a free account, log in and hit the [compiler button](https://developer.mbed.org/compiler/). You should be presented with the following simple but really powerful programming environment.

![Image alt]({{site.url}}/img/dcdc_converter.png "image title")

## PROGRAMMING WITH GCC

### KINETIS DESIGN STUDIO IDE
This is the simplest and free way to get started with Freescale ARM programming. You need to head to the Freescale website [www.freescale.com/kds](www.freescale.com/kds), registed, download and install the tool **Kinetis Design Studio Integrated Development Environment (IDE)**. This software toos is based on Eclipse and GCC and it is available for Windows, Mac and Linux.

Note that the [Kinetis Design Studio](www.freescale.com/kds) does not include the Freescale Software Development Kit (SDK). See next section.

### KINETIS SDK
To write and compile meaningful code for any Freescale MCU is a very good idea to download, install and use the Kinetis Software Development Kit (KSDK) that Freescale has made for all of us. All necessary files are available from the Freescale website [ www.freescale.com/ksdk]( www.freescale.com/ksdk).

KSDK includes a hardware abstraction layer (HAL) and drivers for each MCU peripheral, USB and connectivity stacks, middleware, real-time operating systems and example applications designed to simplify and accelerate application development on Kinetis MCUs. KSDK includes full source code under a permissive open-source license for all hardware abstraction and peripheral driver software. The Kinetis SDK is offered for free and is installed in its own folder so that it could be used not only with Kinetic Design Studio but with any other software development tool.

Like a gigantic C/C++ library, KSDK allows you to use all features of Freescale MCUs in a relative easy way. The good think about an SDK is that, if you like, you can drop the Freescale Kinetis Design Studio IDE and keep use the same SDK with any other GCC (or not GCC) tools.

Once you are done with the KSDK installation do not forget to update the Kinetis Design Studio IDE via the link in Help - Install New Software. Refer to KSDK documentation for additional help available from:

{% highlight bash %}
C:\Freescale\KSDK_1.2.0\doc\Getting Started with Kinetis SDK (KSDK).pdf
{% endhighlight %}

## BASIC HELLO WORLD

This is the basic code to blink a LED.

{% highlight cpp %}
#include "fsl_device_registers.h"
#include "board.h"
 
static int i = 0;
 
int main(void){
  short OFF = 1;
  short ON = 0;
  hardware_init();
  GPIO_DRV_SetPinDir(kGpioLED1,kGpioDigitalOutput); //Green LED
  
  while (1){
    for (i = 0; i<0xFFFFFF; i++){}
    GPIO_DRV_WritePinOutput(kGpioLED1, ON); //Green LED on
    for (i = 0; i<0xFFFFFF; i++){}
    GPIO_DRV_WritePinOutput(kGpioLED1, OFF); //Green LED off
    }
     return 0;
}
{% endhighlight %}

## DEBUGGING WITH OPENSDA

## ONE MORE THING
Now you should be familiar with ARM programming and now you might be interested in abandoning these Eclipse tools and use the Freescale SDK from a bare metal development environment only made of the Freescale SDK, the open-source compiler GCC and your favorite editor.

### GCC AND GDB
Under nearly and Debian-like Linux distribution you can install gcc and GDB with the following commands.

{% highlight bash %}
sudo add-apt-repository ppa:terry.guo/gcc-arm-embedded
sudo apt-get update
sudo apt-get install gcc-arm-none-eabi
{% endhighlight %}



