## Test cases for testing the discount functionality
1. ### Test case: a valid discount code to rental order
Input: Valid discount code
Expected Output: Discount code is applied to the rental order and the order total is updated accordingly.

2. ### Test case: an invalid discount code to rental order
Input: Invalid discount code
Expected Output: Discount code is not applied to the rental order and an error message is displayed.

3. ### Test case:  a discount code with an expired date
Input: Discount code with an expired date
Expected Output: Discount code is not applied to the rental order and an error message is displayed.

4. ### Test case:  a discount code with maximum number of uses reached
Input: Discount code with maximum number of uses reached
Expected Output: Discount code is not applied to the rental order and an error message is displayed.

5.  ### Test case: a discount code with recipient limitation
Input: Discount code with recipient limitation
Expected Output: Discount code is not applied to the rental order and an error message is displayed.

6. ### Test case: a discount code with user type limitation
Input: Discount code with user type limitation
Expected Output: Discount code is not applied to the rental order and an error message is displayed.

7. ### Test case:  a discount code with order value limitation
Input: Discount code with order value limitation
Expected Output: Discount code is applied to the rental order only if the order value meets the criteria. Otherwise, an error message is displayed.

8.  ### Test case: an admin viewing order information with correct totals and discount value
Input: Admin views order information
Expected Output: Admin can see the correct order total and discount value applied to the order.

9. ### Test case: a customer viewing order confirmation with correct totals and discount value
Input: Customer receives order confirmation
Expected Output: Customers can see the correct order total and discount value applied to the order.

10.  ### Test case: a customer viewing order confirmation without a discount code
Input: Customer receives order confirmation without a discount code
Expected Output: Order total and discount value are not displayed.

11. ### Test case: a customer viewing order confirmation with an invalid discount code
Input: Customer receives order confirmation with an invalid discount code
Expected Output: Order total and discount value are not displayed.

12. ### Test case: a customer viewing order confirmation with an expired discount code
Input: Customer receives order confirmation with an expired discount code
Expected Output: Order total and discount value are not displayed.

13. ### Test case: a customer viewing order confirmation with maximum number of uses reached discount code
Input: Customer receives order confirmation with maximum number of uses reached discount code
Expected Output: Order total and discount value are not displayed.

14. ### Test case:  a customer viewing order confirmation with recipient limitation discount code
Input: Customer receives order confirmation with recipient limitation discount code
Expected Output: Order total and discount value are not displayed.

15. ### Test case:  a customer viewing order confirmation with user type limitation discount code
Input: Customer receives order confirmation with user type limitation discount code
Expected Output: Order total and discount value are not displayed.


## Based on the level of criticality and risk, I would prioritize the following scenarios:
1. Verify the discount code can only be used within the specified date range.
2. Verify the discount code can only be used up to a certain number of times.
3. Verify an error message is displayed if a customer tries to use an expired discount code.
4. Verify an error message is displayed if a customer tries to use a discount code that has reached its maximum usage limit.
5. Verify an error message is displayed if a customer tries to use a discount code that is not valid for their user type.
6. Verify an error message is displayed if a customer tries to use a discount code that is not valid for their order value.
7. Verify when a customer adds two rental items and uses the discount code "2FOR35", the total rental cost is £35 for a 4-day rental.
8. Verify when a customer adds three rental items and uses the discount code "3FOR50", the total rental cost is £50 for a 10-day rental.
9. Verify an error message is displayed if a customer tries to use the "2FOR35" code on an order with only one item.
10. Verify an error message is displayed if a customer tries to use the "3FOR50" code on an order with less than three items.
11. Verify the correct discount value is displayed to the admin when viewing order information.
12. Verify the correct discount value is displayed to the customer on the order confirmation.



 ## Risks when testing this feature
1. ### Incorrect discount application:
 There is a risk of the discount code not being applied correctly, resulting in customers being overcharged or not receiving the intended discount. This could be due to a technical issue, such as a bug in the code, or an issue with the discount configuration.

2. ### Invalid discount codes: 
Customers may try to use invalid discount codes or codes that have expired, leading to confusion or frustration.

3. ### Security concerns: 
There is a risk of sensitive information being compromised if there are security vulnerabilities in the discount code system.

4. ### Data integrity:
 There may be a risk of data loss or corruption if the system is not designed to handle large amounts of data, or if there are bugs in the code that affect the integrity of the data.

5. ### User experience: 
The discount code system may affect the overall user experience if it is not intuitive or easy to use. Customers may also have difficulty finding the discount code field or understanding how to apply the code.

6. ### Compatibility issues: 
The discount code system may have compatibility issues with certain browsers or devices, causing issues for some users.

7. ### Limits on discount codes: 
The system may not have appropriate limits on the use of discount codes, leading to customers abusing the system or taking advantage of loopholes. This could result in lost revenue for the company.