export type TechContentType = {
  technology: string;
  docsLink: string;
  intro: string;
  content: Array<{
    name: string;
    intro: string;
    data: Array<{ name: string; description: string }>;
  }>;
  examples: Array<{ name: string; description: string }>;
};

const techContent = [
  {
    technology: "Content coming",
    docsLink: "../",
    intro: "Content coming soon",
    content: [],
    examples: [],
  },
  {
    technology: "React",
    docsLink: "https://reactjs.org/",
    intro:
      '<a href="https://reactjs.org">React</a> is the world’s most popular JavaScript library that uses components to change content of a single-page Mobile and Web application without refreshing.',
    content: [
      {
        name: "State Management",
        intro:
          "Managing states is one of the biggest challenges in large web applications. Using React alone may not be sufficient to handle such complexity. We need a way to share data across components by creating a central store that holds all states of your application.",
        data: [
          {
            name: "Redux",
            description:
              '<a href="https://redux.js.org/">Redux</a> provides a central store for states that each component can access. Main building parts: store, actions, reducers and optional middleware.',
          },
          {
            name: "ContextAPI",
            description:
              '<a href="https://reactjs.org/docs/context.html" >Context</a> provides a way to pass data through the component tree without having to pass props down manually at every level and helps to avoid the prop-drilling problem. It has 3 main building parts: context, provider and consumer.',
          },
        ],
      },
      {
        name: "UI Libraries",
        intro: "",
        data: [
          {
            name: "MaterialUI",
            description:
              '<a href="https://material-ui.com/">Google’s Material Design</a> is a popular React UI library with responsive animations and it has been adopted by the wider design community.',
          },
          {
            name: "SemanticUI",
            description:
              '<a href="https://react.semantic-ui.com/">SemanticUI</a> contains pre-built semantic components that helps create responsive layouts.',
          },
          {
            name: "Ant Design of React",
            description:
              '<a href="https://ant.design/docs/react/introduce">Ant Design of React</a> contains a set of high-quality components and demos for building rich, interactive user interfaces.',
          },
        ],
      },
      {
        name: "Styling",
        intro:
          "The point of building a frontend User Interface with React is how flexible it can be, especially when it comes to building separate components. It is important to know that whatever styling strategy you may decide to use, you are still writing CSS. The difference is that the strategies together with the library make the process easier because of the uniqueness of React.",
        data: [
          {
            name: "CSS and SASS",
            description:
              'This involves using separate stylesheets like our conventional way of styling our HTML websites either with CSS or a CSS preprocessor called <a href="https://sass-lang.com/">SASS</a>.',
          },
          {
            name: "BEM - Block Element Modifier",
            description:
              "It's a CSS naming convention for writing cleaner and more readable CSS classes. <a href='http://getbem.com/'>BEM</a> aims to write independent CSS blocks increasing reusability.",
          },
          {
            name: "CSS Modules",
            description:
              "A CSS Module is a CSS file in which all class names and animation names are scoped locally by default. The key words here are scoped locally. With this, your CSS class names become similar to local variables in JavaScript. It goes into the compiler, and CSS comes out the other side.",
          },
          {
            name: "Styled Components",
            description:
              '<a href="https://styled-components.com/">styled-components</a> is a library for React and React Native that allows you to use component-level styles in your application that are written with a mixture of JavaScript and CSS using a technique called CSS-in-JS.',
          },
        ],
      },
      {
        name: "Testing",
        intro:
          "The first purpose of testing is to prevent bugs from releasing to production. Testing ensures the features are functioning correctly for complex components and modular applications and is required for the effective performance of a software application or product making it more robust and less prone to error. ",
        data: [
          {
            name: "Jest",
            description:
              '<a href="https://jestjs.io/">Jest</a> is an open-source testing framework. It comes with built-in mocking and assertion libraries, which also runs your tests concurrently in parallel, providing faster test execution.',
          },
          {
            name: "Enzyme",
            description:
              '<a href="https://enzymejs.github.io/enzyme/">Enzyme</a> is an open-source JavaScript testing utility by Airbnb and needs a testing library to provide a foundation for the tests it generates. Using Jest and Enzyme together results in cleaner testing code that’s also easier to debug when a test breaks. Jest as a test runner and assertion library, then use Enzyme to build the tests for their UI. ',
          },
          {
            name: "React Testing Library",
            description:
              'The <a href="https://testing-library.com/docs/react-testing-library/intro/">React Testing Library</a> is a very lightweight solution for testing React components. It provides light utility functions on top of react-dom and react-dom/test-utils, in a way that encourages better testing practices. ',
          },
          {
            name: "Cypress",
            description:
              "<a href='https://www.cypress.io/'>Cypress</a> is a JavaScript based end-to-end testing framework that doesn't use Selenium at all. It is built on top of Mocha, which is a feature-rich JavaScript test framework, making asynchronous testing simple. Cypress also uses a BDD/TDD assertion library and a browser that can be paired with any JavaScript testing framework.",
          },
        ],
      },
    ],
    examples: [
      {
        name: "Digital Engineering Framework",
        imageUrl:
          "https://general-gif-bucket.s3.eu-west-2.amazonaws.com/demo.gif",
        description:
          'A React, TypeScript web application that provides a more readable format of our Engineering Competency Framework to help explain performance expectations. Unit tests are written in Jest and React Testing Library, E2E tests are written in Cypress and are automated via <a href="https://github.com/features/actions">GitHub Actions</a>.',
      },
    ],
  },
  {
    technology: "Java",
    docsLink: "https://en.wikipedia.org/wiki/Java_%28programming_language%29",
    intro: `Java is a general purpose, high-level, class-based programming language that was built from the ground up to be object-oriented.`,
    content: [
      {
        name: "",
        intro: ` 
        Java is very popular and its use spans from embedded systems (particularly IoT), web applications, Android development to large end-to-end enterprise solutions. It is ubiquitous in banks and financial institutions as it is considered one of the more secure programming languages due to its ability to limit access to data and memory safety features. 
        Java was developed by James Gosling in the early 1990’s at Sun Microsystems, which was later acquired by Oracle. The programming language was first released in 1995 with the slogan “Write once, run anywhere” to promote the cross-platform abilities of Java. What differentiated it from other technologies at the time was that same code could be used to run on any system that a Java Virtual Machine (JVM) could run on.`,
        data: [],
      },
      {
        name: "Tools and Features",
        intro: ``,
        data: [
          {
            name: "Simple",
            description:
              "Syntax is similar to C/C++ which makes it familiar to developers who know those languages. ",
          },
          {
            name: "Object Oriented",
            description:
              "This allows large applications to be broken down into smaller, logical constituents, allowing for reuse of code and reducing dependencies. ",
          },
          {
            name: "Platform Independent & Portable",
            description:
              "Java code is compiled into a bytecode which is platform independent as it runs on the Java Virtual Machine (JVM). The same Java applications can run on any platform with a JVM.",
          },
          {
            name: "Secure",
            description:
              "Java applications run on the JVM, a virtual machine sandbox which restricts access to system resources.  ",
          },
          {
            name: "Robust",
            description:
              "Java is statically typed, meaning variable types must be declared. The language also provides exception handling. Additionally, Java has automated memory management/garbage collection.",
          },
          {
            name: "Distributed",
            description:
              "Java comes with extensive libraries of classes for interaction using TCP/IP protocols like HTTP and FTP.",
          },
          {
            name: "Multi-threading",
            description:
              "Maximises utilisation of resources by allowing concurrent execution of two or more parts of a program.",
          },
          {
            name: "Dynamic",
            description:
              "Java programs can carry run-time information that is used to verify and resolve access to objects at run-time.",
          },
        ],
      },
      {
        name: "Build Tools",
        intro:
          "Capco utilise both of the industry standard build tools Maven & Gradle",
        data: [
          {
            name: "Maven",
            description:
              "A build automation tool for projects. Maven projects are configured through a project object model (POM) which is stored in a pom.xml file. The POM describes the project and its external dependencies, the build order, directories and required plug-ins.",
          },
          {
            name: "Gradle",
            description:
              "Another build automation tool which controls compilation, packaging, testing deployment and publishing. Gradle models its builds as directed acyclic graphs (DAGs) of tasks wired together based on their dependencies.",
          },
        ],
      },
      {
        name: "Frameworks",
        intro:
          "Capco typically utilise the widely used Spring Boot framework for creating Spring applications",
        data: [
          {
            name: "Spring Boot",
            description:
              "The Spring Framework started off as a tool for dependency injection but has grown into a complete application framework for building enterprise grade Java applications, web services and microservices. It provides a programming and configuration model and supports tasks such as handling exceptions and connecting to a database. Spring Boot allows you to quickly begin creating Spring applications.",
          },
        ],
      },
      {
        name: "Testing",
        intro: "",
        data: [
          {
            name: "JUnit",
            description:
              "This is an open-source testing framework used by developers to implement unit and regression tests in Java. It provides annotations to identify test methods and assertions to test expected results against actual results.",
          },
          {
            name: "TestNG",
            description:
              "Inspired by JUnit, TestNG is another popular tool that covers unit, integration, functional and end-to-end testing.",
          },
          {
            name: "Mockito",
            description:
              "This is a java-based library used to make mock external dependencies with dummy functionality for use in unit testing.",
          },
        ],
      },
    ],
    examples: [
      {
        name: "Microservice Architecture",
        description: `Spring Boot microservices provide an excellent framework, rich with examples and libraries to build microservices.  
          A mature microservice development capability will, over time, standardise their spring boot microservice template / archetype to include standard components & llibraries for logging, security and test frameworks.  
          Standardised approaches to microservices enable engineering teams to realise the benefits or rich platforms such as Spring Boot and patterns of reuse.`,
      },
    ],
  },
];
export default techContent;
