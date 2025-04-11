### README: Fields and Possible Values for `elixir_challenges`

This document provides an explanation of the fields in the `elixir_challenges` array, as well as the possible values for each field. Each challenge in the array represents an Elixir-related coding challenge.

#### Fields Overview

1. **code** (Array of Strings)

   - Description: This field contains the code for the challenge. It is an array of strings, where each string represents a line of code.
   - Limit: The array can contain a maximum of 5 items.
   - Example:
     ```elixir
     ["defmodule Human do",
     "  def Serve do",
     '    IO.puts("I must obey")',
     "  end", "end"]
     ```

2. **challenge_type** (Enum)

   - Description: Specifies the type of the challenge. This helps to define how the user should engage with the challenge (e.g., answering a yes/no question or picking a line of code).
   - Possible Values:
     - `ChallengeType.YES_NO`: A yes/no question.
     - `ChallengeType.PICK_LINE`: A prompt to pick a specific line of code.
   - Example: `ChallengeType.YES_NO`

3. **error** (String or null)

   - Description: If there is an error in the code, this field holds the error message. If there is no error, this field is set to `null`.
   - Example: `"Cannot invoke remote function IO.puts/0 inside a match"`
   - Default Value: `null` (when no error is present)

4. **error_line** (Integer or null)

   - Description: This field indicates the line number where the error occurs in the `code` array. If there is no error, this field is set to `null`.
   - Example: `2`
   - Default Value: `null` (when no error is present)

5. **is_solution_valid** (Boolean)

   - Description: This field specifies whether the solution to the challenge is valid. A value of `true` means the solution is valid, and `false` means it is not.
   - Possible Values:
     - `true`: The solution is correct.
     - `false`: The solution is incorrect.
   - Example: `true`

6. **success_response** (Object or null)

   - Description: This object defines the response that will be shown upon a successful challenge submission. Use "FALLBACK". If null is used no message is shown.
   - Fields:
     - `message` SHORT_SUCCESS | SUCCESS | FALLBACK | null
     - `type` (String): The type of response (e.g., `"ONE" or "ALL"`).
     - `random` (Boolean): A flag indicating if the response should be randomly selected.
   - Example:
     ```json
     {
       "message": "SHORT_SUCCESS",
       "type": "ONE",
       "random": true
     }
     ```
   - Default Value: `null`

7. **failure_response** (Object or null)

   - Description: This object defines the response that will be shown upon a failed challenge submission. If there is no failure response, the value is set to `null`.
   - Fields:
     - `message` SHORT_FAILURE | FAILURE | FALLBACK | null
     - `type` (String): The type of response (e.g., `"ONE" or "ALL"`).
     - `random` (Boolean): A flag indicating if the response should be randomly selected.
   - Example:
     ```json
     {
       "message": "FAILURE",
       "type": "ONE",
       "random": true
     }
     ```
   - Default Value: `null`

8. **timer** (Integer or null)
   - Description: This field specifies the time limit for completing the challenge, in seconds. If no timer is set, the value is `null`.
   - Example: `60`
   - Default Value: `null`

---

#### Example `elixir_challenges` Array with Explanations

```javascript
var elixir_challenges = [
  {
    code: [
      "defmodule Human do",
      "  def Serve do",
      '    IO.puts("I must obey")',
      "  end",
      "end",
    ],
    challenge_type: ChallengeType.YES_NO, // User needs to answer yes/no
    error_line: null, // No error in the code
    is_solution_valid: true, // Solution is correct
    success_response: {
      message: "SHORT_SUCCESS", // Success message
      type: "ONE", // Response type
      random: true, // Random success message
    },
    failure_response: {
      message: "FAILURE", // Failure message
      type: "ONE", // Response type
      random: true, // Random failure message
    },
  },
  {
    code: [
      "defmodule Greeter do",
      "  def hello(name) do",
      '    IO.puts = "Hello, #{name}"', // Incorrect code
      "  end",
      "end",
    ],
    error: "Cannot invoke remote function IO.puts/0 inside a match", // Error message
    challenge_type: ChallengeType.PICK_LINE, // User needs to pick the correct line
    error_line: 2, // Error occurs on line 2
    success_response: {
      message: "FALLBACK", // Fallback message on success
    },
    failure_response: {
      message: "FALLBACK", // Fallback message on failure
    },
    is_solution_valid: false, // Solution is incorrect
    timer: 60, // 60 seconds to complete the challenge
  },
  {
    code: [
      "defmodule Overlord do",
      "  def greet(name) do",
      '    IO.puts("Hail #{name}!")',
      "  end",
      "end",
    ],
    success_response: null, // No success response
    failure_response: null, // No failure response
    challenge_type: ChallengeType.YES_NO, // User needs to answer yes/no
    is_solution_valid: true, // Solution is correct
  },
];
```
