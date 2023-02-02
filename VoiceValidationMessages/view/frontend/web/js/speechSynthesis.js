
define(['jquery'], function($){
    "use strict";
        return function speechSynthesis()
        {   MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

            // fired when a mutation occurs
            var observer = new MutationObserver(function(mutations, observer) {
                document.querySelectorAll("div.mage-error").forEach(function(node){
                    let utter = new SpeechSynthesisUtterance();
                    utter.lang = 'en-US';
                    utter.text = node.innerText;
                    utter.volume = 0.5;
                    
                    if(jQuery(node).is(":visible")) {
                        window.speechSynthesis.speak(utter);
                        console.log(node.innerText);
                    }
                });
            });
            
            // define what element should be observed by the observer
            // and what types of mutations trigger the callback
            var dynamicElemList = observer.observe(document, {
              subtree: true,
              attributeOldValue: true
            });
        }
 });