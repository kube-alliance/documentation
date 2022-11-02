"use strict";(self.webpackChunkkubinity=self.webpackChunkkubinity||[]).push([[425],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(h,s(s({ref:t},c),{},{components:n})):a.createElement(h,s({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3322:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={},s="Persistent storage",i={unversionedId:"guides/persistent-storage",id:"guides/persistent-storage",title:"Persistent storage",description:"Whether you are deploying a database or an image gallery, sooner or later you",source:"@site/docs/guides/persistent-storage.md",sourceDirName:"guides",slug:"/guides/persistent-storage",permalink:"/docs/guides/persistent-storage",draft:!1,editUrl:"https://github.com/kubinity-com/documentation/tree/main/docs/guides/persistent-storage.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Deploying a public service",permalink:"/docs/guides/deploying-a-public-service"},next:{title:"Namespace Resources",permalink:"/docs/guides/resources"}},l={},p=[],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"persistent-storage"},"Persistent storage"),(0,r.kt)("p",null,"Whether you are deploying a database or an image gallery, sooner or later you\nwill end up having to persist data across pods."),(0,r.kt)("p",null,"The way you usually add persistent storage to an application in Kubernetes is\nthrough a ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/"},"Persistent\nVolume"),". In\norder to get access to a Persistent Volume, you will need to create\n",(0,r.kt)("em",{parentName:"p"},"PersistentVolumeClaim"),". This can easily be done using a manifest:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: myapp-pvc\nspec:\n  accessModes:\n    - ReadWriteOnce\n  resources:\n    requests:\n      storage: 500Mi\n")),(0,r.kt)("p",null,"By creating this Persistent Volume Claim, you implicitly also create a\npersistent volume, which can be used by a pod. Once deployed, you can run the\nfollowing command to check if your claim has been reserved successfully:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"> kubectl get pvc\nNAME        STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS   AGE\nmyapp-pvc   Bound    pvc-4e17de08-34a5-4177-9c96-90f799f0181e   500Mi      RWO            longhorn       10s\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"pvc")," is short for ",(0,r.kt)("inlineCode",{parentName:"p"},"persistentvolumeclaims"),". There are many more of\nthese shorthands, like ",(0,r.kt)("inlineCode",{parentName:"p"},"po"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"svc")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"deploy"),". There is a\n",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/kubectl/#resource-types"},"list")," of short\ncodes that might come in handy when punching away KubeCTL commands.")),(0,r.kt)("p",null,"Once deployed, Kubernetes will try to allocate space ",(0,r.kt)("em",{parentName:"p"},"somewhere"),", where space is\navailable. This could be a dedicated storage cluster via\n",(0,r.kt)("a",{parentName:"p",href:"https://ceph.io/en/"},"Ceph"),", a managed cloud service like ",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/de/ebs/"},"AWS\nEBS")," or simply a local directory on the current\nnode. Where the data ultimately resides is decided by the ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/storage-classes/"},"Storage\nClass")," of the\nvolume claim."),(0,r.kt)("p",null,"In our case, the only storage class available is\n",(0,r.kt)("a",{parentName:"p",href:"https://longhorn.io/"},"Longhorn"),", so you don't need to explicitly add the\n",(0,r.kt)("inlineCode",{parentName:"p"},"storageClass")," directive to the manifest of your ",(0,r.kt)("inlineCode",{parentName:"p"},"PersistentVolumeClaim"),".\nLonghorn is a storage engine that ensures multiple replicas of your data across\nthe cluster. This means that if the node with your data were to go down, there\nis at least one, but most likely two copies of that data on other nodes.\nLonghorn will automatically swap your existing volume to one of those replicas\nto ensure that your data is always available and secure."),(0,r.kt)("p",null,"Let's look at an example of how you might use a persistent volume in a deployment:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: postgres\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: postgres\n  template:\n    metadata:\n      labels:\n        app: postgres\n    spec:\n      containers:\n        - name: postgres\n          image: postgres:10.1\n          ports:\n            - containerPort: 5432\n          env:\n            - name: POSTGRES_DB\n              value: db0\n            - name: POSTGRES_USER\n              value: admin\n            - name: POSTGRES_PASSWORD\n              value: admin123\n          volumeMounts:\n            - mountPath: "/var/lib/postgresql/data"\n              subPath: pgdata                         # The data will be placed at "/pgdata" on the volume \n              name: myapp-pgdata\n      volumes:\n      - name: myapp-pgdata\n        persistentVolumeClaim:\n          claimName: myapp-pvc\n')),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},'In this example, we\'re storing the credentials to the database in the manifest\nitself for the sake of simplicity. In a production environment, this should be\navoided at all cost! Take a look at the "Secrets" page (to be written...) to\nlearn how you can securely store sensitive data in a cluster.')),(0,r.kt)("p",null,"Here, we're creating a deployment of ",(0,r.kt)("a",{parentName:"p",href:"https://www.postgresql.org/"},"PostgreSQL"),".\nWe first link the volume to the deployment using the ",(0,r.kt)("inlineCode",{parentName:"p"},"volumes")," directive, and\nthen mount that volume to a path in a container. Postgres by default stores its\ndata under ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/postgresql/data"),", so that's where we want to mount our\nvolume."),(0,r.kt)("p",null,"After applying the resources, you should see that a new pod has been created by\nthe deployment:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"> kubectl get pod   \nNAME                        READY   STATUS    RESTARTS   AGE\npostgres-5c7dfc7f67-qrns4   1/1     Running   0          83s\n")))}u.isMDXComponent=!0}}]);