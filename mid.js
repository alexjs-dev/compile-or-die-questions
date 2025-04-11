var mid = [
  {
    code: [
      "defmodule Math do",
      "def square_all(list), do: Enum.map(list, fn x -> x * x end)",
      "square_all([1, 2, :three])",
      "end",
    ],
    error: "** (ArithmeticError) you cannot multiply :three with :three",
    challenge_type: ChallengeType.PICK_LINE,
    error_line: 3,
    is_solution_valid: false,
    success_response: {
      message: "FALLBACK",
    },
    failure_response: {
      message: "FALLBACK",
    },
  },
];
