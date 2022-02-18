# eventHBS

Event HUBS technology
1)Event type declared in layout (for example class click);
2)Name of handler-event function declared in layoyt (for example data-foo arg);
3)The unified event processing dispatcher is built on a combination of the dispatcher function (disp in this example) and the object whose properties are the handler functions**whose names are specified in the layout.
**Note: Functional Expression!

You can use symplifity version with delegate when delete const clicks in string 2 , and replace
in string 12 document.body.addEventListener('click', onEvent);
instead of this [...clicks].map((el) => el.addEventListener('click', onEvent));
