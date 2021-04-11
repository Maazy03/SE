const cameltoSnake = require('./Ques1')
const snaketoCamel=require('./Ques2')
const uniqifyElement=require('./Ques3')
//*************************************QUES1 Test Cases**************************************// 

    test('testQ1CaseValid', () => {
        
        expect(cameltoSnake('stringCase')).toBe('string_case');
    });
    
    test('testQ1CaseInValid', () => {
        
        expect(cameltoSnake('snake_case')).toBe('string_case');
    });


//*************************************QUES2 Test Cases**************************************// 

    test('testQ2CaseValid', () => {
        
        expect(snaketoCamel('hey_world')).toBe('heyWorld');
    });
    
    test('testQ2CaseInValid', () => {
        expect(snaketoCamel('Hey_World')).toBe('heyWorld');
    });
//*************************************QUES3 Test Cases**************************************// 
const expected=["hello", "is", "maaz", "my", "name"]
    test('testQ3CaseValid', () => {
        
        expect(uniqifyElement('hello my name is my hello maaz is')).toEqual(expect.arrayContaining(expected));
    });
    
    // test('testQ3CaseInValid', () => {
    //     expect(uniqifyElement('hello my name is my hello maaz Is')).toBe(["hello", "is", "maaz", "my", "name"]);
    // });

