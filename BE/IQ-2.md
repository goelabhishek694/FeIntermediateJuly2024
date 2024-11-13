Asynchronous I/O Operation

so basically nodejs handles /o operations lke reading files , querying from db , or making an http request. async. allows event loop to continue new tasks/code . 

event driven architecture: when an i/o operation is completed , nodejs uses events or cllbacks to process thr result. ensuring the srver remains resposnsive . 

concurrency : Node JS handles many concurrent operations efficiently w/o creating new threads for I/O request, maintaining resposiveness under high loads . 

CPU intensive tasks 

1. Block Nature: CPU bound tasks such as complex calculations , image processing . are processed on the main thread , blocking the main thread and the event loop and preventing NodeJS from handling other tasks. 

fib(2) fib 1 + fib 0 
fib(12) -> gimme the 12th fibonacci number . fib(12) = fib(11) + fib(10); 

fib(2)
fib(2)
fib(3)
fib(4)

2. Impact on Performance : When the thread is busy with a CPU- hevay task , it cant pricess new request or i/o operations, leading to slow response time and potential unresponsiveness. 



highlighting the difference 

responsiveness: IO - yes, CPU intensive- no
suitability : nodejs excels in handling high i/o workloads but is less efficient with CPU intensive tasks. using child processes or worker threads can offload CPU-intensive tasks from main thread. 

*IQ - am i starting a new nodejs runtime from existing nodejs runtime ? 
Ans. Yes.

1. parallel processing : heavy compo or sync code can block the main thread. 
2. isloated env : own mem, own .env and runtime confguration . independent of our main nodejs instance. if child crashes or run into any issues. it wont affect the parent . 
hw -> sandbox 
this isloation can be helpful doer sanboxing untrusted code or performing memory-intensive tasks . 

3. IPC : fork method . parent and child communicate uysing special message channel . facilitting the data exchnage w/o blocking the mian thread. use -> data processing , handling multiple requests concurrently or splitting comples calculations across multiple processes.

* does this mean it is a way to make nodejs multi threaded ?

by using cp we allow multiple parts of our application to run in paralell. this can be similar to multi threading because it lets you handle several taks at the same time . 

what should we use to get multi threading in node js ? 

worker_threads module, which provides real multi-threading, by actually creating threads within the same process. worker threads share the mem . unlike cp. 


cp ? -> when u need full isolation. such as running a separate nodejs instance or executing diff scripts or binaries.  

wt ? -> if we need finer grained multi threading and can benefit from shared memory. 


suppose we have a computtionlly heavu taks like matrix multiplaction. ror encding a lrge video file.

using worker threads allows us to divide the work across threads , process it n parallel and use shared memory for efficient communication b/w threads. 
expecially when shared memory access and low overhead communication . 
p1 -> mem 1
cp1 -> 
cp2 ->

Worker Threads are better for tasks that need efficient data sharing and high performance within a single memory space.
Child Processes (fork) are more suitable for isolated tasks that need to run independently and don’t require close, high-speed communication with the parent process.

if your building a webserver that nees to process user uploads , we should use fork to handle each file upload in a separate child process. in case one upload process crashes


event emitter class in nodejs

allows objects to communicate by emitting and listening for events. 
