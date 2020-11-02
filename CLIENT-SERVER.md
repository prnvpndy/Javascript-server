Client Server: When we type an address such as www.successive.tech into our browser, we are commanding it to open a TCP channel the server 
which respond to that URL (Uniform resource locater), A URL is like our home address or phone number becuase it describe how to reach you.
In this situation, Our computer, which is making the request, is called the client. The URL we are requesting is the address that belongs to 
the server. Once the TCP connection is established, the client sends a HTTP request to the server to retrieve the webpage it should display.

    Suppose you want to check out the latest services offerings from http://successive.tech After you type the URL into your browser, your 
    browser will extract the http part and recognize that it is the name of the network protocol to use. Then, it takes the domain name from 
    the URL, in this case “successive.tech”, and asks the internet Domain Name Server to return an Internet Protocol (IP) address.

    Now the client knows the destination’s IP address. It then opens a connection to the server at that address, using the http protocol as 
    specified. It will initiate a request to the server which contains the IP address of the host and optionally a data payload.

    It can be tricky to understand how HTTP functions because it’s difficult to examine what your browser is actually doing. For better 
    understanding Imagine the internet is a town. You are a client and your address determines where you can be reached. Businesses in town, 
    such as successive.tech, serve requests that are sent to them. The other houses are filled with other clients like you that are making 
    requests and expecting responses from these businesses in town. This town also has a crazy fast mail service, an army of mail delivery 
    staff that can travel on trains that move at the speed of light.

    Suppose you want to read the morning newspaper. In order to retrieve it, you write down what you need in a language called HTTP and ask 
    your local mail delivery staff agent to retrieve it from a specific business. The mail delivery person agrees and builds a railroad track 
    (connection) between your house and the business nearly instantly, and rides the train car labeled “TCP” to the address of the business 
    you provided. 

    The mail delivery person is able to retrieve it from the business. You can now read your newspaper in peace until you decide you want to 
    read the next page, at which point, you would make another request and give it to the mail delivery person.

    This is how request get served