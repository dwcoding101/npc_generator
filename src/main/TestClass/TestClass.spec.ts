/**
 * Function to unit test the Class TestClass
 * @author D Whitney
 */
import { TestClass } from '../TestClass/TestClass'

/**
 * This is a comment for "describe".
 */
describe('Test for TestClass class', ()=> {
  it('This should output "this is working"',()=>{
    let testClass = new TestClass();
    expect(testClass.testCheck()).toEqual('This is working');
  })
});