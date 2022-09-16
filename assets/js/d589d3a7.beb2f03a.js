"use strict";(self.webpackChunkkubealliance=self.webpackChunkkubealliance||[]).push([[162],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9390:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:1},i="Getting started",s={unversionedId:"getting-started",id:"getting-started",title:"Getting started",description:"This document describes how to get started with KubeAlliance.",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/docs/getting-started",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/getting-started.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Guides",permalink:"/docs/category/guides"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Creating an account",id:"creating-an-account",level:2},{value:"Deploying a resource",id:"deploying-a-resource",level:2},{value:"A note about resources",id:"a-note-about-resources",level:3},{value:"Next steps",id:"next-steps",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting started"),(0,o.kt)("p",null,"This document describes how to get started with KubeAlliance."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Parts of this documentation may still be incomplete. If you found an issue or\nwant to clarify a topic, we encourage you to head over to the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kube-alliance/documentation"},"repository")," of our\ndocumentation and suggest changes.")),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"To access the cluster and deploy resources, you need KubeCTL. If you haven't\nalready, check out ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/de/docs/tasks/tools/install-kubectl/"},"the official installation\nguide")," on the\nKubernetes documentation website."),(0,o.kt)("h2",{id:"creating-an-account"},"Creating an account"),(0,o.kt)("p",null,"Kube Alliance is still being developed. There is no user management yet, so\nadministrative actions have to be done by a human. To request an account, please\nhead over to ",(0,o.kt)("a",{parentName:"p",href:"https://garrit.xyz/contact"},"my website")," and ask me about access to\nthe cluster."),(0,o.kt)("p",null,"After your account has been created, you will be provided with a\nconfiguration-file that you need to copy to your home directory. KubeCTL usually\nexpects this file to be at ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.kube/config"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note"),": Keep in mind that this file contains secrets, so please\nhandle it with care!")),(0,o.kt)("p",null,"And that's it! Just like that, you have access to your very own space on the\ncluster."),(0,o.kt)("p",null,"To test your access, enter this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ kubectl get resourcequota\n")),(0,o.kt)("p",null,"If everything went fine, you should see your current resource usage on the\nsystem."),(0,o.kt)("p",null,"And just like that, you have access to your very own space on the cluster.\nWelcome aboard!"),(0,o.kt)("h2",{id:"deploying-a-resource"},"Deploying a resource"),(0,o.kt)("p",null,"To deploy a resource to a Kubernetes, you will need to create a manifest file\ndescribing that resource. Here is a very simple example of a resource (in this\ncase a\n",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/deployment/"},"Deployment"),")\nthat will spin up a bare-bones NGINX server:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment\nspec:\n  selector:\n    matchLabels:\n      app: nginx\n  minReadySeconds: 5\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:latest\n        ports:\n        - containerPort: 80\n        resources:\n          requests:\n            memory: 10Mi\n            cpu: 10m\n          limits:\n            memory: 20Mi\n            cpu: 20m\n")),(0,o.kt)("p",null,"After saving this manifest to a file (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"deployment.yml"),"), you can deploy it\nto the cluster using KubeCTL:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"> kubectl apply -f deployment.yml\n\ndeployment.apps/hello-world created\n")),(0,o.kt)("p",null,"You can check if the resources have been created successfully by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"> kubectl get pods\n\nNAME                           READY   STATUS    RESTARTS   AGE\nhello-world-7df56d9c98-92ngn   1/1     Running   0          3m7s\n")),(0,o.kt)("p",null,"If you want, you can already access your application via the port-forwarding\ncapability of KubeCTL. The following command will forward traffic on port 8080\nof your local machine to port 80 in the pod, which is the port we specified in the deployment:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"> kubectl port-forward deployment/hello-world 8080:80\n\nForwarding from 127.0.0.1:8080 -> 80\nForwarding from [::1]:8080 -> 80\n")),(0,o.kt)("p",null,"You should be able to navigate to ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:8080")," in your browser and see your\napplication!"),(0,o.kt)("h3",{id:"a-note-about-resources"},"A note about resources"),(0,o.kt)("p",null,"During the initial testing phase of KubeAlliance, I decided to keep the resource\nlimits fairly small. As a result, "),(0,o.kt)("p",null,"Once KubeAlliance reaches enough maturity, it will be possible\nto allocate more resources in the cluster."),(0,o.kt)("h2",{id:"next-steps"},"Next steps"),(0,o.kt)("p",null,"If you want to learn more about creating resources in Kubernetes, check out\n",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/manage-kubernetes-objects/declarative-config/"},"this"),"\namazing tutorial on their website. If you are completely new to Kubernetes, ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/"},"the\nconcept overview")," might help you make\nsense of some things. If you're still feeling lost, don't hesitate to join our\n",(0,o.kt)("a",{parentName:"p",href:"https://matrix.to/#/#kubealliance:matrix.org"},"Matrix room")," and join the\nconversation!"))}p.isMDXComponent=!0}}]);