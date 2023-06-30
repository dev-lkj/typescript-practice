// let hello: string = 'Hello world!';

// hello = 'Hello~'

// console.log(hello);

// 타입 종류

/// 문자
// let str: string
// let red: string = "Red";
// let green: string = 'Green';
// let myColor: string = `My color is ${red}.`
// let yourColor: string = 'Your color is' + green

/// 숫자
// let num: number;
// let integer: number = 6;
// let float: number = 3.14;
// let infinity: number = Infinity;
// let nan: number = NaN;


/// 불린
// let isBoolean: boolean;
// let isDone: boolean = false;


/// Null / Undefined
// let nul: null;
// let und: undefined;
// console.log(null);
// console.log(und);


/// 배열
// const fruits: string[] = ['Apple', 'Banana', 'Cherry']
// const numbers: number[] = [1,2,3,4,5,6,7]
// const union: (string|number)[] = ['Apple', 1, 2, 'Banana', 3];
// const array: [] = [1, 2, 3]; // number[] 이렇게 같이 작성해줘야됨


/// 객체
//typeof DATA === 'object'
// const obj: object = {}
// const arr: object = []
// const func: object = function () {}
// // 위 세개는 거의 안씀. 모두가 오브젝트라

// const userA: {
//     name: string,
//     age: number,
//     isValid: boolean
// } = {
//     name : 'abc',
//     age: 85,
//     isValid : true
// }
// const userB: {
//     name: string,
//     age: number,
//     isValid: boolean
// } = {
//     name : 'Neo',
//     age: 22,
//     isValid : false
// }
// // 재활용하기 불편함이 있음. 나중에 interface를 씀
// interface User {
//     name: string,
//     age: number,
//     isValid: boolean
// }
// const userC : User = {
//     name: 'ggg',
//     age: 85,
//     isValid : true,
// }
// const userD : User = {
//     name: 'hhh',
//     age: 22,
//     isValid : false,
// }


/// 함수
// const add: (x:number, y:number) => number = function(x,y) {
//     return x+y;
// }
// 이렇게도 가능
// const add = function (x:number, y:number) :number {
//     return x+y;
// }
// const a: number = add(1,2);

// const hello: () => void = function() {
//     console.log('Hello world~');
// }
// 이렇게도 가능
// const hello = function():void {
//     console.log('Hello world~');
// }
// const h: void = hello();

// function minus(x: number, y:number) :number {
//     return x-y;
// }


/// Any
// 코드를 엄격하게 관리해야 에러가 줄어들기 때문에 any는 자제하는 것이 좋다고 함
// let hello: any = 'Hello world'
// hello = 123
// hello = false
// hello = null
// hello = {}
// hello = []
// hello = function () {}


/// Unknown
// const a: any = 123;
// const u: unknown = 123;

// const any: any = a;
// const boo: boolean = a;
// const num: number = a;
// const arr: string[] = a;
// const obj: {x:string, y:number} = a;

// const any: any = u;
// const boo: boolean = u;
// const num: number = u;
// const arr: string[] = u;
// const obj: {x:string, y:number} = u;
// 위 코드에 u를 넣으면 boo, num, arr, obj 모두 에러가 남


/// Tuple
// 온전히 순서가 정해져있을 떄 좋을듯
// const tuple: [string, number, boolean] = ['a', 1, false];
// const users: [number, string, boolean][] = [[1, 'Neo', true], [2, 'Evan', false], [3,'Lewis',true]]



/// Void
// function hello(msg: string): void {
//     console.log(`Hello ${msg}`);
// }
// const hi: void = hello('world');


/// Never
// 직접 사용할 일은 없음. 타입 지정이 잘못되면 never 인것처럼 에러를 만나게 됨
// const nev: [never] = []
// nev.push(3)


/// Union
// 1가지 이상의 타입을 설정 가능
// let union: string | number;
// let union: (string | number)[]; // 배열은 타입을 묶어줘야됨
// union = 'Hello type!';
// union = 123;
// union = false; //에러


/// Intersection
// interface User {
//     name: string,
//     age: number,
// }
// interface Validation {
//     isValid: boolean,
// }
// const abc: User & Validation = {
//     name: 'Neo',
//     age: 85,
//     isValid: true,
// }

// ------------------------------------------------------------------
// 타입 추론 (Inference)
// '추론' - 어떠한 판단을 근거로 삼아 다른 판단을 이끌어 냄.

// 1) 초기화된 변수
// 2) 기본값이 설정된 매개 변수
// 3) 반환 값이 있는 함수

// let num = 12
// num = 'Hello type!';
// 타입스크립트가 타입을 알아서 잘 추론하기 때문에 꼭 필요한 곳에서만 타입을 지정해줘도 됨

// 초기화된 변수 `num`
// let num = 12

// 기본값이 지정된 매개 변수 `b` + 반환 값이 확실한 함수 `add`
// function add(a: number, b = 2) {
//     return a + b;
// }


//--------------------------------------------------------
// 타입 단언(Assertion)
// '단언' - 주저하지 아니하고 딱 잘라 말함.

// 단언 키워드 - as
// Non-null 단언 연산자 - !

// 1)
// const el = document.querySelector('body') as HTMLBodyElement;
// el.textContent = 'Hello world?!';

// const el = document.querySelector('body');
// el!.textContent = 'Hello world?!';
// 타입 에러가 발생하지않지만 문제가 발생 할 수 있음

// 이런식으로 작성하면 타입스크립트와 상관없이 물리적으로 데이터가 있는 경우, 없는 경우를 나눌 수 있음. (타입 가드)
// const el = document.querySelector('body');
// if(el){
//     el.textContent = 'Hello world?!';
// }


// 2)
// function getNumber (x: number | null | undefined) {
//     return Number((x as number).toFixed(2))
// }
// function getNumber (x: number | null | undefined) {
//     return Number(x!.toFixed(2))
// }
// 이렇게 하면 number가 아닌 경우가 들어오게 됨 (문제 발생 가능)

// 타입 가드 사용 (타입 단언)
// function getNumber (x: number | null | undefined) {
//     if(x){
//         return Number(x.toFixed(2))
//     }
// }
// getNumber(3.1415926535);
// getNumber(null);


// 3)
// function getValue(x: string | number, isNumber : boolean) {
//     if(isNumber){
//         return Number((x as number).toFixed(2))
//     }
//     return (x as string).toUpperCase()
// }
// // 이 부분은 number와 string을 지정해주어야 함
// getValue('Hello world', false) //'HELLO WORLD'
// getValue(3.1415926535,true); // 3.14



// 할당 단언 (Assertion)
// '단언' - 주저하지 아니하고 딱 잘라 말함.
// non-null 연산자 ! 아니고 할당 단언임. num에 값을 할당해야하는데 없이 넘어 갈 수 있도록 선언
// let num!: number
// console.log(num); // undefiend


//---------------------------------- 타입 가드
// 타입 가드 (Guards)

// function logText(el: Element) {
//     console.log(el.textContent);
// }

// // const h1El = document.querySelector('h1') as HTMLHeadingElement;
// // logText(h1El); // 콘솔에서 타입 에러가 남. 타입 가드 필요

// const h1El = document.querySelector('h1');
// // h1El이 거짓 조건이 아닐때를 사용. 타입 가드를 추가.
// if(h1El){
//     logText(h1El);
// }
// // or
// if(h1El instanceof HTMLHeadingElement){ // h1El가 어떤 엘리먼트 클래스인지 붙혀줘서 null이 아닌 조건을 작성해줌.
//     logText(h1El);
// }

// 새로운 예제
// function add(val: string | number) {
//     let res = 'Result => '
//     if(typeof val === 'number'){
//         res += val.toFixed(2)
//     }else {
//         res += val.toUpperCase()
//     }
//     console.log(res);
// }

// function add(val: string | number | boolean) {
//     let res = 'Result => '
//     if(typeof val === 'number'){
//         res += val.toFixed(2)
//     }
//     if(typeof val === 'string') {
//         res += val.toUpperCase()        
//     }
//     console.log(res);
// }

// add(3.141592);
// add('hello world');



// ------------------ 인터페이스 - 기본
// 인터페이스(Interface)

// 선택적 속성 - ?
// 읽기전용 속성 - readonly

// interface User { // pascal case로 이름을 지어줌
//     name: string,
//     readonly age: number, // 읽기만 되서 값을 할당 못함
//     isValid? : boolean //  선택적으로 사용 가능. 필수 아님.
// }
// const abc: User = {
//     name : 'abc',
//     age: 85,
//     isValid : true,
// }
// abc.isValid = false; // 할당 가능
// abc.age = 22; // 할당 불가능 에러남

// const neo: User = {
//     name: 'Neo',
//     age: 102,
//     // isValid를 선택적으로 바꾸고 에러 없어짐
// }



// 인터페이스 함수 타입 - 호출 시그니처(Call Signature) (소괄호)
// 인덱스 가능 타입 - 인덱스 시그니처 (Index Signature)
// 확장 (상속)


// 인덱스 함수 타입

// interface GetName {
//     (message: string): string
// } // 1) 이렇게 사용가능 (재사용시 사용)
// interface User {
//     name : string,
//     age: number,
//     // getName : GetName, //1)
//     getName : (meesage: string) => string // 2) 재사용하지 않을때 선언 가능 message를 param으로 적어도 가능
// }
// const abc: User = {
//     name: 'abc',
//     age: 85,
//     getName(message: string){
//         console.log(message);
//         return this.name;
//     }
// }
// abc.getName('Hello~');


// // 인터페이스 - 인덱싱 가능 타입 - 인덱스 시그니처 (Index Signature) (대괄호, 배열 타입을 지정)

// // 배열
// interface Fruits {
//     [item: number] : string
// }
// const fruits : Fruits = ['Apple', 'Banana', 'Cherry'];
// console.log(fruits);
// console.log(fruits[1]);

// // 객체
// interface User {
//     [key :string] : unknown, // 대괄호를 사용해서 인덱스를 검색 가능, 배열값이나 불린 등 어느 값이 올지 모르니 unknown 사용했음
//     name: string
//     age: number
// }
// const bcd: User  = {
//     name: 'abc',
//     age: 85,
// }
// bcd['isValid'] = true;
// bcd['emails'] = ['abc@gmail.com', 'test@gmail.com']
// console.log(bcd);


// 추가 예제
// interface Payload {
//     [key: string] : unknown
// }
// function logValues(payload : Payload) {
//     for( const key in payload) {
//         console.log(payload[key]);
//     }
// }
// interface User {
//     [key: string] : unknown // 인덱스 가능한 타입으로 만들기 위해 작성
//     name: string
//     age: number
//     isValid: boolean
// }
// const efg: User = {
//     name: 'abc',
//     age: 85,
//     isValid: true,
// }
// logValues(efg);



// 인터페이스 (Interface)
// 확장(상속)

// interface UserA {
//     name: string
//     age: number
// }
// interface UserB extends UserA{
//     isValid : boolean
// }

// const abc: UserA = {
//     name : 'abc',
//     age: 85,
//     isValid : true,
// }
// const neo: UserB = {
//     name: 'Neo',
//     age: 102,
//     isValid: true
// }

// 다른 예제
// interface FullName {
//     firstName: string
//     lastName : string
// }
// interface FullName {
//     middleName: string
//     // lastName : boolean // 기존 속성과 달라서 에러남
//     lastName : string
// }
// // 동일한 이름의 인터페이스 생성 가능하나,  기존 존재하는 속성의 타입을 그대로 작성해줘야 함

// const fullName : FullName = {
//     firstName : 'Tomas',
//     middleName : 'Sean',
//     lastName : 'Connery'
// }


// 타입 별칭(Alias)
// 별칭을 만들때 앞에 type 을 사용

// type TypeA = string // 원하는 이름으로 지정
// type TypeB = string | number | boolean
// type User = {
//     name: string
//     age: number
//     isValid : boolean
// } | [string, number, boolean]

// const userA : User = {
//     name: 'Neo',
//     age: 85,
//     isValid: true,
// }
// const userB : User = ['Evan', 36, false];

// function someFunc(param: TypeB): TypeA {
//     switch (typeof param){
//         case 'string':
//             return param.toUpperCase()
//         case 'number':
//             return param.toFixed(2)
//         default :
//             // return true
//             return 'Boolean!'
//     }
// }


// 인터페이스를 대신하여 type을 사용
// type TypeUser = { // = 할당연산자가 type 별칭에는 꼭 필요
//     name: string
//     age: number
//     isValid : boolean
// }
// interface InterfaceUser {
//     name: string
//     age: number
//     isValid: boolean
// }

// const abc: TypeUser = {
//     name: 'abc',
//     age: 85,
//     isValid: true
// }
// // 둘다 사용 가능한데 취향차이지만, 굳이 따지자면 Interface 방식을 추천. 별칭은 좀 더 사용범위가 넓어서 굳이 고르자면 인터페이스를 사용을 권장
// const abc: InterfaceUser = {
//     name: 'abc',
//     age: 85,
//     isValid: true
// }


// 함수 - 명시적 this

// interface Cat {
//     name: string
//     age: number
// }
// const cat: Cat = {
//     name : 'Lucy',
//     age:3
// }

// function hello(this: Cat, message: string) { // this는 매개변수라기보다 위에서 정한 타입을 정하는 것이라고 생각하면 됨
//     console.log(`Hello ${this.name}, ${message}`)
// }
// hello.call(cat, 'You are pretty awesome!'); // call메소드는 함수나 메소드 뒤에서 바로 사용 함수가 메소드가 어떤 대상에서 실행될 것인지 정하는 것 
// // cat 객체 데이터 기준에서 호출. this.는 cat에서 오는 것.



// // -------
// // 함수 - 오버로딩 (Overloading)

// // 1)
// function add1(a: string, b:string){
//     return a + b;
// }
// function add2(a:number, b:number){
//     return a + b;
// }
// add1('hello ', 'world~') // 'hello world~'
// add2(1,2) // 3
// add1('hello ', 2) // 타입이 안맞아서 에러남
// add2('hello ', 2) // 타입이 안맞아서 에러남


// // 2) 오버로딩
// function add(a:string, b: string) : string // 1 타입 선언
// function add(a:number, b: number) : number // 2 타입 선언
// function add(a:any, b: any) { // 함수 구현 타입선언 1,2를 일치하게 할당되도록 함
//     return a + b;
// }
// add('hello ', 'world~') // 'hello world~'
// add(1, 2) // 3
// add('hello ', 2) // 타입이 안맞아서 에러
// add(1, 'world~') // 타입이 안맞아서 에러



// -----------------------------
// 클래스

// 접근제어자 (Acess Modifiers)
// public - 어디서나 자유롭게 접근 가능, 클래스 바디에서 생략 가능
// protected - 나와 파생된 후손 클래스 내에서 접근 가능
// private - 내 클래스에서만 접근 가능


// class UserA {
//     //타입스크립트는 먼저 속성을 적어주어야 에러가 뜨지 않음
//     // public first: string = ''
//     // public last: string = ''
//     // public age: number = 0
//     // constructor(first: string, last: string, age: number) {
//     //     this.first = first
//     //     this.last = last
//     //     this.age = age
//     // }
//     // 위 방식 말고 다른 방식
//     constructor(
//         // public은 생략 불가
//         public first: string = '', 
//         public last: string = '', 
//         public age: number = 0) {
//             // ...
//         }
//     getAge() {
//         return `${this.first} ${this.last} is ${this.age}`
//     }
// }

// class UserB extends UserA {
//     getAge() {
//         return `${this.first} ${this.last} is ${this.age}`
//     }
// }

// class UserC extends UserB {
//     getAge() {
//         return `${this.first} ${this.last} is ${this.age}`
//     }
// }

// const neo = new UserA('Neo', 'Anderson', 102);
// console.log(neo.first)
// console.log(neo.last)
// console.log(neo.age)


// --------------------------------
// 제네릭 (Generic)
/// 함수

interface Obj {
    x: number
}
type Arr = [number, number];

// 기존 오버로딩 방식
// function toArray(a: string, b:string) : string[]
// function toArray(a: number, b:number) : number[]
// function toArray(a: boolean, b:boolean) : boolean[]
// function toArray(a: Obj, b:Obj) : Obj[]
// function toArray(a: Arr, b:Arr) : Arr[]
// function toArray(a: any, b:any){
//     return [a, b];
// }

//제네릭 방식
// function toArray<T>(a: T, b:T){ // type혹은 T로 사용 (제네릭)
//     return [a, b];
// }

// console.log(
//     // toArray('Neo', 'Anderson'),
//     // toArray(1, 2),
//     // toArray(true, false),
//     // toArray({x:1}, {x:2}),
//     // toArray([1,2],[3,4]),

//     toArray<string>('Neo', 'Anderson'), // <string>으로 표현 가능 (명시)
//     toArray(1, 2),
//     toArray(true, false),
//     toArray({x:1}, {x:2}),
//     toArray<Arr>([1,2],[3,4]), // number[]에서 <Arr>로 직접 지정해줌
// );


// // 제네릭
// /// 클래스
// class User<P>{
//     // public payload: P
//     // constructor(payload:P) {this.payload = payload}
//     constructor(public payload: P) {}
//     getPayload() {
//         return this.payload
//     } 
// }

// interface UserAType {
//     name: string
//     age : number
//     isValid : boolean
// }

// interface UserBType {
//     name: string
//     age : number
//     emails : string[]
// }

// const abc = new User <UserAType>({
//     name: 'abc',
//     age: 85,
//     isValid : true,
//     // emails : 'abc@gmail.com'
// });

// const neo = new User <UserBType>({
//     name: 'neo',
//     age: 102,
//     // isValid : false,
//     emails: ['neo@gmail.com'] // ?!
// });


// 제네릭
/// 인터페이스, 제약 조건(Constraints)

// interface MyData<T>{
// // interface MyData<T extends string | number> {
//     name: string
//     value: T
// }
// const dataA: MyData<string> = {
//     name: 'data A',
//     value: 'Hello world'
// }
// const dataB: MyData<number> = {
//     name: 'Data B',
//     value: 1234
// }
// const dataC: MyData<boolean> = {
//     name: 'Data C',
//     value: true
// }
// const dataD: MyData<number[]> = {
//     name: 'Data D',
//     value: [1,2,3,4]
// }


// -----------------------------------
// 패키지의 타입 선언
 // /// <reference path="./lodash.d.ts" /> 
// 삼중슬래시 지시자 / 참조태그 파일명을 lodash.d.ts 말고 다른거 할 때 이렇게 해서 잡아줌 슬래시 3번 필수
// import _ from 'lodash'

// const str = 'the brown fox jumps over the lazy dog.'

// console.log(_.camelCase(str))
// console.log(_.snakeCase(str))
// console.log(_.kebabCase(str))

// 구글에 DefinitelyTyped
// npm install @types/lodash -D
// 필요한 거를 찾아서 사용


// ----------------------------------------------
// 타입 가져오기와 내보내기

// import { getFullName, User } from './user';

// const abc: User = {
//     firstName : 'abc',
//     lastName : 'Lee',
//     age:85,
//     isValid:true
// }
// const fullName = getFullName(abc)

// console.log(fullName)
// console.log(abc.isValid)



// ----------------------- 
// tsconfig.json 구성 옵션
// README.md 파일에 작성
