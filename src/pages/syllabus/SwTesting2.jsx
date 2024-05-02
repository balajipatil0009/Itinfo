import React from "react";
import Navbar from "../../componunts/Navbar";
import Footer from "../../componunts/Footer";
import "../../App.css";

const SwTesting2 = () => {
  return (
    <div className="w-[100vw] h-auto">
      <Navbar />
      <div className="w-full h-[40vh] flex justify-center items-center bg-gradient-to-b from-yellow-400 via-yellow-200 to-white">
        <div>
          <h1 className=" font-sansMedium  text-center text-3xl font-bold w-full">
            Software Testing
          </h1>
          <p className="w-[70vw] text-justify pt-5">
            data scince will be 6 month course Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Cum obcaecati cupiditate, odio a
            dolorem iure nam eos veritatis ipsa placeat nesciunt voluptates
            eaque, explicabo excepturi tempore sequi inventore fuga amet!
          </p>
        </div>
      </div>
      <div className="w-[100vw] flex md:justify-center m-0 p-0">
        <div className="w-[90%] md:w-2/3 min-h-48">
          {/* leftcard of syllabus */}
          <div className="grid mt-4 ml-3 md:m-0">
            <div className="h-fit w-full md:w-[50%] relative justify-self-end md:justify-self-start grid md:grid left-[-2]">
              <div className="w-[95%] md:w-[80%] px-2 py-3 h-fit border rounded-lg mt-4 bg-gray-200 justify-self-end md:justify-self-start">
                <h1 className="w-[100%] px-6 bg-blue-500 p-1 rounded font-sansMedium">
                  Introduction to Software Testing
                </h1>
                <div className="w-full ml-[6%]">
                  <ul className="list-disc  w-[97%]">
                    <li>Exploring the Essentials of Software Testing</li>
                    <li>Difference between Static and Dynamic testing</li>
                  </ul>
                </div>
              </div>
              <div className="h-full w-[4px] bg-amber-400 absolute left-[-2px] md:left-auto  top-0 md:right-[-2px] rounded-t-full"></div>
              <div className="w-[18px] h-[18px] bg-blue-500 top-8 absolute left-[-9px] md:right-[-9px] md:left-auto rounded-full border-4 border-blue-500"></div>
            </div>
          </div>
          {/* rightcard of syllabus */}
          <div className="grid ml-3 md:m-0 h-fit">
            <div className="h-fit w-full md:w-[50%] relative justify-self-end grid">
              <div className="w-[95%] md:w-[80%] mt-4 px-2 py-3 h-fit border rounded-lg bg-gray-200 justify-self-end">
                <h1 className="w-[100%] px-6 bg-blue-500 p-1 rounded font-sansMedium">
                  Types of Testing
                </h1>
                <div className="w-full ml-[6%]">
                  <ul className="list-disc  w-[97%]">
                    <li>Black box testing and its types</li>
                    <li>White box testing and its types</li>
                    <li>
                      System Integration Testing vs User Acceptance Testing
                    </li>
                    <li>
                      Integration testing- Big Bang, Incremental
                      approach(Top-down, bottom-up)
                    </li>
                  </ul>
                </div>
              </div>
              <div className="h-full w-1 bg-amber-400 absolute top-0 left-[-2px]"></div>
              <div className=" absolute w-[18px] h-[18px] bg-blue-500 top-8 left-[-9px] rounded-full border-4 border-blue-500"></div>
            </div>
          </div>
          {/* leftcard of syllabus */}
          <div className="grid ml-3 md:m-0">
            <div className="h-fit w-full md:w-[50%] relative justify-self-end md:justify-self-start grid md:grid left-[-2]">
              <div className="w-[95%] md:w-[80%] px-2 py-3 h-fit border rounded-lg mt-4 bg-gray-200 justify-self-end md:justify-self-start">
                <h1 className="w-[100%] px-6 bg-blue-500 p-1 rounded font-sansMedium">
                  Software Development Life Cycle(SDLC)
                </h1>
                <div className="w-full ml-[6%]">
                  <ul className="list-disc  w-[97%]">
                    {/* <li>Exploring the Essentials of Software Testing</li>
                    <li>Difference between Static and Dynamic testing</li> */}
                  </ul>
                </div>
              </div>
              <div className="h-full w-[4px] bg-amber-400 absolute left-[-2px] md:left-auto  top-0 md:right-[-2px]"></div>
              <div className="w-[18px] h-[18px] bg-blue-500 top-8 absolute left-[-9px] md:right-[-9px] md:left-auto rounded-full border-4 border-blue-500"></div>
            </div>
          </div>
          {/* rightcard of syllabus */}
          <div className="grid ml-3 md:m-0 h-fit">
            <div className="h-fit w-full md:w-[50%] relative justify-self-end grid">
              <div className="w-[95%] md:w-[80%] mt-4 px-2 py-3 h-fit border rounded-lg bg-gray-200 justify-self-end">
                <h1 className="w-[100%] px-6 bg-blue-500 p-1 rounded font-sansMedium">
                  STLC –Software Testing Life Cycle{" "}
                </h1>
                <div className="w-full ml-[6%]">
                  <ul className="list-disc  w-[97%]">
                    <li>Difference between Error, bug, defect, and failure</li>
                    <li>
                      Test Case Design, TechniqueBoundary Value, Analysis
                      Equivalence, Partitioning Decision Table
                    </li>
                  </ul>
                </div>
              </div>
              <div className="h-full w-1 bg-amber-400 absolute top-0 left-[-2px]"></div>
              <div className=" absolute w-[18px] h-[18px] bg-blue-500 top-8 left-[-9px] rounded-full border-4 border-blue-500"></div>
            </div>
          </div>
          {/* leftcard of syllabus */}
          <div className="grid ml-3 md:m-0">
            <div className="h-fit w-full md:w-[50%] relative justify-self-end md:justify-self-start grid md:grid left-[-2]">
              <div className="w-[95%] md:w-[80%] px-2 py-3 h-fit border rounded-lg mt-4 bg-gray-200 justify-self-end md:justify-self-start">
                <h1 className="w-[100%] px-6 bg-blue-500 p-1 rounded font-sansMedium">
                  Flow graph notations
                </h1>
                <div className="w-full ml-[6%]">
                  <ul className="list-disc  w-[97%]">
                    <li>Statement coverage Branch Coverage path coverage</li>
                    <li>Cyclometric Complexity</li>
                    <li>Requirement traceability matrix</li>
                  </ul>
                </div>
              </div>
              <div className="h-full w-[4px] bg-amber-400 absolute left-[-2px] md:left-auto  top-0 md:right-[-2px]"></div>
              <div className="w-[18px] h-[18px] bg-blue-500 top-8 absolute left-[-9px] md:right-[-9px] md:left-auto rounded-full border-4 border-blue-500"></div>
            </div>
          </div>
          {/* rightcard of syllabus */}
          <div className="grid ml-3 md:m-0 h-fit">
            <div className="h-fit w-full md:w-[50%] relative justify-self-end grid">
              <div className="w-[95%] md:w-[80%] mt-4 px-2 py-3 h-fit border rounded-lg bg-gray-200 justify-self-end">
                <h1 className="w-[100%] px-6 bg-blue-500 p-1 rounded font-sansMedium">
                  Test Environment and Test data preparation
                </h1>
                <div className="w-full ml-[6%]">
                  <ul className="list-disc  w-[97%]">
                    <li>
                      Exploring Various Testing Levels and Testing Techniques
                    </li>
                  </ul>
                </div>
              </div>
              <div className="h-full w-1 bg-amber-400 absolute top-0 left-[-2px]"></div>
              <div className=" absolute w-[18px] h-[18px] bg-blue-500 top-8 left-[-9px] rounded-full border-4 border-blue-500"></div>
            </div>
          </div>
          {/* leftcard of syllabus */}
          <div className="grid ml-3 md:m-0">
            <div className="h-fit w-full md:w-[50%] relative justify-self-end md:justify-self-start grid md:grid left-[-2]">
              <div className="w-[95%] md:w-[80%] px-2 py-3 h-fit border rounded-lg mt-4 bg-gray-200 justify-self-end md:justify-self-start">
                <h1 className="w-[100%] px-6 bg-blue-500 p-1 rounded font-sansMedium">
                  Describing Testing Tools
                </h1>
                <div className="w-full ml-[6%]">
                  <ul className="list-disc  w-[97%]">
                    <li>
                      Unified Functional Testing (UFT) 14.50 Describing
                      LoadRunner
                    </li>
                    <li>
                      Describing Automation Testing Agile Software Testing
                    </li>
                    <li>
                      Testing Mobile Applications Testing Internet Applications
                      Testing Desktop Applications
                    </li>
                    <li>Security Testing Software Defect Management</li>
                    <li>
                      Software Quality Assurance (SQA) Software Quality Metrics
                      Improving Software Quality
                    </li>
                  </ul>
                </div>
              </div>
              <div className="h-full w-[4px] bg-amber-400 absolute left-[-2px] md:left-auto  top-0 md:right-[-2px]"></div>
              <div className="w-[18px] h-[18px] bg-blue-500 top-8 absolute left-[-9px] md:right-[-9px] md:left-auto rounded-full border-4 border-blue-500"></div>
            </div>
          </div>
          {/* rightcard of syllabus */}
          <div className="grid ml-3 md:m-0 h-fit">
            <div className="h-fit w-full md:w-[50%] relative justify-self-end grid">
              <div className="w-[95%] md:w-[80%] mt-4 px-2 py-3 h-fit border rounded-lg bg-gray-200 justify-self-end">
                <h1 className="w-[100%] px-6 bg-blue-500 p-1 rounded font-sansMedium">
                  Core Java
                </h1>
                <div className="w-full ml-[6%]">
                  <ul className="list-disc  w-[97%]">
                    <li>
                      Setup Java environment – Download JDK and Setup eclipse
                    </li>
                    <li>
                      Keywords and Syntax Conditions, Loops, Access and
                      nonaccess modifiers
                    </li>
                    <li>Exception Handling, File and DB handling</li>
                    <li>Collections overview, and ArrayList example</li>
                  </ul>
                </div>
              </div>
              <div className="h-full w-1 bg-amber-400 absolute top-0 left-[-2px]"></div>
              <div className=" absolute w-[18px] h-[18px] bg-blue-500 top-8 left-[-9px] rounded-full border-4 border-blue-500"></div>
            </div>
          </div>
          {/* leftcard of syllabus */}
          <div className="grid ml-3 md:m-0">
            <div className="h-fit w-full md:w-[50%] relative justify-self-end md:justify-self-start grid md:grid left-[-2]">
              <div className="w-[95%] md:w-[80%] px-2 py-3 h-fit border rounded-lg mt-4 bg-gray-200 justify-self-end md:justify-self-start">
                <h1 className="w-[100%] px-6 bg-blue-500 p-1 rounded font-sansMedium">
                  Input Fundamentals and Datatypes in Java
                </h1>
                <div className="w-full ml-[6%]">
                  <ul className="list-disc  w-[97%]">
                    <li>Methods of Keyboard inputs</li>
                    <li>Scanner, Buffered Reader</li>
                    <li>Java Array</li>
                    <li>String vs character array.Accessing Array</li>
                    <li>Multi-Dimensional Arrays</li>
                  </ul>
                </div>
              </div>
              <div className="h-full w-[4px] bg-amber-400 absolute left-[-2px] md:left-auto  top-0 md:right-[-2px]"></div>
              <div className="w-[18px] h-[18px] bg-blue-500 top-8 absolute left-[-9px] md:right-[-9px] md:left-auto rounded-full border-4 border-blue-500"></div>
            </div>
          </div>
          {/* rightcard of syllabus */}
          <div className="grid ml-3 md:m-0 h-fit">
            <div className="h-fit w-full md:w-[50%] relative justify-self-end grid">
              <div className="w-[95%] md:w-[80%] mt-4 px-2 py-3 h-fit border rounded-lg bg-gray-200 justify-self-end">
                <h1 className="w-[100%] px-6 bg-blue-500 p-1 rounded font-sansMedium">
                  Object Oriented Programming
                </h1>
                <div className="w-full ml-[6%]">
                  <ul className="list-disc  w-[97%]">
                    <li>Procedural Vs Object Oriented Program</li>
                    <li>
                      Abstraction, Encapsulation, Inheritance,Polymorphism.
                    </li>
                    <li>Java Access Modifiers (and Specifiers)</li>
                    <li>Inheritance</li>
                  </ul>
                </div>
              </div>
              <div className="h-full w-1 bg-amber-400 absolute top-0 left-[-2px]"></div>
              <div className=" absolute w-[18px] h-[18px] bg-blue-500 top-8 left-[-9px] rounded-full border-4 border-blue-500"></div>
            </div>
          </div>
          {/* leftcard of syllabus */}
          <div className="grid ml-3 md:m-0">
            <div className="h-fit w-full md:w-[50%] relative justify-self-end md:justify-self-start grid md:grid left-[-2]">
              <div className="w-[95%] md:w-[80%] px-2 py-3 h-fit border rounded-lg mt-4 bg-gray-200 justify-self-end md:justify-self-start">
                <h1 className="w-[100%] px-6 bg-blue-500 p-1 rounded font-sansMedium">
                  Inner Class
                </h1>
                <div className="w-full ml-[6%]">
                  <ul className="list-disc  w-[97%]">
                    <li>First View of Inner Class</li>
                    <li>Outer Class Access</li>
                    <li>Types of Inner Class</li>
                  </ul>
                </div>
              </div>
              <div className="h-full w-[4px] bg-amber-400 absolute left-[-2px] md:left-auto  top-0 md:right-[-2px]"></div>
              <div className="w-[18px] h-[18px] bg-blue-500 top-8 absolute left-[-9px] md:right-[-9px] md:left-auto rounded-full border-4 border-blue-500"></div>
            </div>
          </div>
          {/* rightcard of syllabus */}
          <div className="grid ml-3 md:m-0 h-fit">
            <div className="h-fit w-full md:w-[50%] relative justify-self-end grid">
              <div className="w-[95%] md:w-[80%] mt-4 px-2 py-3 h-fit border rounded-lg bg-gray-200 justify-self-end">
                <h1 className="w-[100%] px-6 bg-blue-500 p-1 rounded font-sansMedium">
                  Package
                </h1>
                <div className="w-full ml-[6%]">
                  <ul className="list-disc  w-[97%]">
                    <li>Package Import</li>
                    <li>Package vs. Header File</li>
                    <li>Creating and Using the Sub Package</li>
                  </ul>
                </div>
              </div>
              <div className="h-full w-1 bg-amber-400 absolute top-0 left-[-2px]"></div>
              <div className=" absolute w-[18px] h-[18px] bg-blue-500 top-8 left-[-9px] rounded-full border-4 border-blue-500"></div>
            </div>
          </div>
          {/* leftcard of syllabus */}
          <div className="grid ml-3 md:m-0">
            <div className="h-fit w-full md:w-[50%] relative justify-self-end md:justify-self-start grid md:grid left-[-2]">
              <div className="w-[95%] md:w-[80%] px-2 py-3 h-fit border rounded-lg mt-4 bg-gray-200 justify-self-end md:justify-self-start">
                <h1 className="w-[100%] px-6 bg-blue-500 p-1 rounded font-sansMedium">
                  Using Predefined Package & Other Classes
                </h1>
                <div className="w-full ml-[6%]">
                  <ul className="list-disc  w-[97%]">
                    <li>Wrapper Classes</li>
                  </ul>
                </div>
              </div>
              <div className="h-full w-[4px] bg-amber-400 absolute left-[-2px] md:left-auto  top-0 md:right-[-2px]"></div>
              <div className="w-[18px] h-[18px] bg-blue-500 top-8 absolute left-[-9px] md:right-[-9px] md:left-auto rounded-full border-4 border-blue-500"></div>
            </div>
          </div>
          {/* rightcard of syllabus */}
          <div className="grid ml-3 md:m-0 h-fit">
            <div className="h-fit w-full md:w-[50%] relative justify-self-end grid">
              <div className="w-[95%] md:w-[80%] mt-4 px-2 py-3 h-fit border rounded-lg bg-gray-200 justify-self-end">
                <h1 className="w-[100%] px-6 bg-blue-500 p-1 rounded font-sansMedium">
                  Garbage Collection
                </h1>
                <div className="w-full ml-[6%]">
                  <ul className="list-disc  w-[97%]">
                    <li>Garbage Collection Introduction</li>
                    <li>Advantages of Garbage Collection</li>
                    <li>Garbage Collection Procedure</li>
                    <li>Java API</li>
                  </ul>
                </div>
              </div>
              <div className="h-full w-1 bg-amber-400 absolute top-0 left-[-2px]"></div>
              <div className=" absolute w-[18px] h-[18px] bg-blue-500 top-8 left-[-9px] rounded-full border-4 border-blue-500"></div>
            </div>
          </div>
          {/* leftcard of syllabus */}
          <div className="grid ml-3 md:m-0">
            <div className="h-fit w-full md:w-[50%] relative justify-self-end md:justify-self-start grid md:grid left-[-2]">
              <div className="w-[95%] md:w-[80%] px-2 py-3 h-fit border rounded-lg mt-4 bg-gray-200 justify-self-end md:justify-self-start">
                <h1 className="w-[100%] px-6 bg-blue-500 p-1 rounded font-sansMedium">
                  Exception Handling
                </h1>
                <div className="w-full ml-[6%]">
                  <ul className="list-disc  w-[97%]">
                    <li>Introduction to Exceptions</li>
                    <li>Try, catch, finally blocks</li>
                    <li>Unchecked Exception</li>
                    <li>Throw & throws keyword</li>
                    <li>Custom Exception Class</li>
                  </ul>
                </div>
              </div>
              <div className="h-full w-[4px] bg-amber-400 absolute left-[-2px] md:left-auto  top-0 md:right-[-2px]"></div>
              <div className="w-[18px] h-[18px] bg-blue-500 top-8 absolute left-[-9px] md:right-[-9px] md:left-auto rounded-full border-4 border-blue-500"></div>
            </div>
          </div>
          {/* rightcard of syllabus */}
          <div className="grid ml-3 md:m-0 h-fit">
            <div className="h-fit w-full md:w-[50%] relative justify-self-end grid">
              <div className="w-[95%] md:w-[80%] mt-4 px-2 py-3 h-fit border rounded-lg bg-gray-200 justify-self-end">
                <h1 className="w-[100%] px-6 bg-blue-500 p-1 rounded font-sansMedium">
                  Multithreading
                </h1>
                <div className="w-full ml-[6%]">
                  <ul className="list-disc  w-[97%]">
                    <li>Creating a Thread by inheriting from Thread class</li>
                    <li>Run() and start() method.</li>
                    <li>Garbage Collection Procedure</li>
                    <li>Runnable Interface Implementation</li>
                    <li>
                      Synchronization method, block Class & Object Level Lock,
                      Deadlock & its Prevention
                    </li>
                    <li>Inter thread Synchronization Life Cycle of Thread</li>
                    <li>
                      Deprecated methods : stop(), suspend(), resume(), etc
                    </li>
                  </ul>
                </div>
              </div>
              <div className="h-full w-1 bg-amber-400 absolute top-0 left-[-2px]"></div>
              <div className=" absolute w-[18px] h-[18px] bg-blue-500 top-8 left-[-9px] rounded-full border-4 border-blue-500"></div>
            </div>
          </div>
          {/* leftcard of syllabus */}
          <div className="grid ml-3 md:m-0">
            <div className="h-fit w-full md:w-[50%] relative justify-self-end md:justify-self-start grid md:grid left-[-2]">
              <div className="w-[95%] md:w-[80%] px-2 py-3 h-fit border rounded-lg mt-4 bg-gray-200 justify-self-end md:justify-self-start">
                <h1 className="w-[100%] px-6 bg-blue-500 p-1 rounded font-sansMedium">
                  Input and Output Streams
                </h1>
                <div className="w-full ml-[6%]">
                  <ul className="list-disc  w-[97%]">
                    <li>Types of Streams</li>
                    <li>Stream Class Hierarchy</li>
                    <li>
                      Using File Class, Copy and Paste the content of a file
                    </li>
                    <li>Byte Streams vs Character Streams</li>
                    <li>Text File vs Binary File</li>
                    <li>
                      Character Reading from Keyboard by Input Stream Reader
                    </li>
                    <li>
                      Standard I/O Streams Using Data Streams to read/write
                    </li>
                  </ul>
                </div>
              </div>
              <div className="h-full w-[4px] bg-amber-400 absolute left-[-2px] md:left-auto  top-0 md:right-[-2px]"></div>
              <div className="w-[18px] h-[18px] bg-blue-500 top-8 absolute left-[-9px] md:right-[-9px] md:left-auto rounded-full border-4 border-blue-500"></div>
            </div>
          </div>
          {/* rightcard of syllabus */}
          <div className="grid ml-3 md:m-0 h-fit">
            <div className="h-fit w-full md:w-[50%] relative justify-self-end grid">
              <div className="w-[95%] md:w-[80%] mt-4 px-2 py-3 h-fit border rounded-lg bg-gray-200 justify-self-end">
                <h1 className="w-[100%] px-6 bg-blue-500 p-1 rounded font-sansMedium">
                  Serialization
                </h1>
                <div className="w-full ml-[6%]">
                  <ul className="list-disc  w-[97%]">
                    <li>Using Object Streams to read/write object</li>
                    <li>Transient Keyword</li>
                    <li>Serialization Process</li>
                    <li>Deserialization Process</li>
                  </ul>
                </div>
              </div>
              <div className="h-full w-1 bg-amber-400 absolute top-0 left-[-2px]"></div>
              <div className=" absolute w-[18px] h-[18px] bg-blue-500 top-8 left-[-9px] rounded-full border-4 border-blue-500"></div>
            </div>
          </div>
          {/* leftcard of syllabus */}
          <div className="grid ml-3 md:m-0">
            <div className="h-fit w-full md:w-[50%] relative justify-self-end md:justify-self-start grid md:grid left-[-2]">
              <div className="w-[95%] md:w-[80%] px-2 py-3 h-fit border rounded-lg mt-4 bg-gray-200 justify-self-end md:justify-self-start">
                <h1 className="w-[100%] px-6 bg-blue-500 p-1 rounded font-sansMedium">
                  Collection Framework
                </h1>
                <div className="w-full ml-[6%]">
                  <ul className="list-disc  w-[97%]">
                    <li>Generics(Templates)</li>
                    <li>What is generic</li>
                    <li>The java.util package</li>
                    <li>Collection What is Collection Framework</li>
                    <li>List, Set & Map interfaces</li>
                    <li>Using Vector, Array List, Stack, Linked List, etc</li>
                    <li>Using Hashtable, Hash Map, Tree Map</li>
                    <li>SortedMap, LinkedHashMap</li>
                    <li>Iterator, Enumerator</li>
                    <li>Using Date and Formatting Date class</li>
                  </ul>
                </div>
              </div>
              <div className="h-full w-[4px] bg-amber-400 absolute left-[-2px] md:left-auto  top-0 md:right-[-2px] rounded-b-full"></div>
              <div className="w-[18px] h-[18px] bg-blue-500 top-8 absolute left-[-9px] md:right-[-9px] md:left-auto rounded-full border-4 border-blue-500"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <Footer />
      </div>
    </div>
  );
};

export default SwTesting2;
