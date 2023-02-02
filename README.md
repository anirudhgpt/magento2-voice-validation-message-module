# magento2-voice-validation-message-module
This module is implementation of custom developed speechSynthesis JS lib which will be used to produce voice messages whenever any validation failure occurs on magneto front for a website. 
A brief idea of implementation in Magento:
Here we are following a simple methodology for implementing the feature we will develop a JS library that will do the job of uttering the voice validation message. This JS lib will be incorporated into a basic Magento Module that will have the feature Enable/Disable the feature for a Magento store.



Developing Speech Synthesis JS Library:
To make the browser tell the things we want we will write a function using Javascript. That will do two things for us, first observing the HTML document for any mutations (appearing messages) when it gets loaded and last when it does get the text that needed to be said from the mutation observer and utter the validation message.

SpeechSynthesisUtterance:
The SpeechSynthesisUtterance interface of the Web Speech API represents a speech request. It contains the content the speech service should read and information about how to read it (e.g. language, pitch, and volume.). Following is an example of the same:

Mutation Observer:
The MutationObserver interface provides the ability to watch for changes being made to the DOM tree. It is designed as a replacement for the older Mutation Events feature, which was part of the DOM3 Events specification.
Here are details of the implementation for POC we have done for magento store.. 
VoiceValidationMessage/etc/module.xml and VoiceValidationMessage/registration.php will define the module to the system.
VoiceValidationMessage/adminhtml/system.xml will define the admin configuration.You can find the configuration in the following path in magento admin:
Magento Admin > Stores > Configuration > Voice Validation Messages (Tab) > General > Speech Synthesis Validation Message > Enable 






We will add the view/frontend changes which will integrate our custom JS library speechSynthesis.js into the header section of our website and call its main function speechSynthesis() via template file VoiceValidationMessage/view/frontend/templates/speechSynthesis.phtml  if respective admin config is enabled.
VoiceValidationMessage/view/frontend/layout/default.xml will our to the page layout of every page as described previously. Now the module structure will look like the following screenshot:




After pasting the module into app/code/Magento folder please run the following commands on Magento root via the command line. This will install the module.
Also do not forget to enable the config for the feature as per given path in point no.2 for the website.

After pasting the module into app/code/Magento folder please run the following commands on Magento root via the command line. This will install the module.
Also do not forget to enable the config for the feature as per given path in point no.2 for the website.
bin/magento setup:upgrade && bin/magento s:di:c && bin/magento s:s:de -f en_US && sudo chmod -R 777 var/ pub/ generated/
