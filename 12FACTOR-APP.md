                                                    12 Factor-App

The 12-Factor App provide a solid framework for organizing our project in order to maintain a healthy and scaleable application. These 12 
principles each apply to subset of our application and will guide us in finding 
the ideal way to manage your application as whole.

    1) Codebase:        Our codebase should be tracked in a central version control system that is easily accessible to all our 
                        developers. We prefer to use Git and share all our repositories through GitHub.

                        There is only one codebase per app, but there will be many deploys of the app. This means that we might have 
                        deployed our application to production and to staging, for example. Both environments share the same codebase, but 
                        might be in a different state. Staging could have some commits not yet deployed to production for testing.
    
    2) Dependencies:    Our application might rely on external libraries and packages to run. We should never assume that these packages 
                        exist on the target system. Instead, our application must declare all dependencies and their correct version 
                        explicitly.   

    3) Configuration:   Configuration options should never be hardcoded, for two reasons:

                        i)  We do not want sensitive information like database credentials or API keys to be committed into the        
                            repository to prevent security leaks.

                        ii) Our configuration varies per environment. For example, we might want to enable debugging on our local 
                            environment while this would be overkill on production. 
                        
                        Instead of hardcoding this information, we rely on environment variables to handle this sensitive information.

    4) Backing Services: A backing service is one that requires a network connection to run, like MySQL or Memcached. If the location or    
                        connection details of such a service changes, we should not have to make code changes. Instead, these details should 
                        be available in the configuration. 

                        For example, our development environment talks to a MySQL server on our local machine. On production, our database runs on another server. The only difference will be the URL to connect to in the configuration.
    
    5)Build, release, run: These stages should be treated as completely distinct from one another

                        The build stage is fully controlled by the developer. This is where we tag a new release and fix bugs.
                        The release stage prepares the build for execution in the target environment. In this stage, we can run tests to 
                        verify if the code behaves as intented.
                        
                        The run stage executes the application and should not need any intervention.
                        For example, it's now impossible to make changes to the runtime. Instead, you make changes to the code in the build 
                        stage where you have total control. This reduces risk and ensures your team that everything is running well.

                        Automation and tooling will help to make this principle simpler. A tool like GitHub can be used to tag your latest 
                        build, while Capistrano can be used to deploy the new build to the server.
    
    6) Processes:       Stateless applications are designed to degrade gracefully. That means if a part of our application stack fails, the 
                        app itself does not become a failure. In other words, the state of your system is completely defined by our 
                        databases and shared storage, and not by each individual running application instance.


    7) Port Binding:    Our application service should also be accessible via a URL, just as our backing services are. This enables our 
                        application to be fully self-contained.

    8) Concurrency:     Every process inside our application should be treated as a first-class citizen. That means that each process should 
                        be able to scale, restart, or clone itself when needed. This approach will improve the sustainability and scalability 
                        of your application as a whole.
                    
    9) Disposability:   This principle is a natural result of the backing services and concurrency principles: after a crash or new 
                        deployment, your app should have everything it needs waiting in databases or caches. Reloading the code should only 
                        take a few seconds max.

    10) Dev/prod parity: This reduces the number of bugs and downtime and allows our organisation to have a much more rapid development cycle.

    11) Logs:           Logging is important for debugging and checking up on the general health of your application. However, your 
                        application should not be concerned with the storage and management of these logs.

    12) Admin Processes: One-off admin processes are long-running processes that should be run in an identical environment as the regular    
                        long-running processes of the app. They run against the same live release, using the same codebase, configuration and 
                        database.






                        
