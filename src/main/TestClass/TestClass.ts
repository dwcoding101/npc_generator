
/**
 * Class to test typescript compilation and unit testing
 * 
 * @author Dan Whitney
 * @since 09/04/2018
 */
export class TestClass {
  constructor() {

  }

  /**
   * This method just outputs "Just testing" to the console
   */
  testOutput(){
    console.log("Just testing")
  }

  /**
   * This method returns the string "This is working" and is used in the unit test
   * for the class. It only a tests to see if the unit test is working.
   */
  testCheck():string {
    return 'This is working';
  }
}