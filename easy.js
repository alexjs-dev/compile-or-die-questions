var elixir_challenges = [
  {
    code: [
      "defmodule Human do",
      "  def Serve do",
      '    IO.puts("I must obey")',
      "  end",
      "end",
    ],
    challenge_type: ChallengeType.YES_NO,
    error_line: null,
    is_solution_valid: true,
    success_response: {
      message: "SHORT_SUCCESS",
      type: "ONE",
      random: true,
    },
    failure_response: {
      message: "FAILURE",
      type: "ONE",
      random: true,
    },
  },
  {
    code: [
      "defmodule Greeter do",
      "  def hello(name) do",
      '    IO.puts = "Hello, #{name}"',
      "  end",
      "end",
    ],
    error: "Cannot invoke remote function IO.puts/0 inside a match",
    challenge_type: ChallengeType.PICK_LINE,
    error_line: 2,
    success_response: {
      message: "FALLBACK",
    },
    failure_response: {
      message: "FALLBACK",
    },
    is_solution_valid: false,
    timer: 60,
  },
  {
    code: [
      "defmodule Overlord do",
      "  def greet(name) do",
      '    IO.puts("Hail #{name}!")',
      "  end",
      "end",
    ],
    success_response: null,
    failure_response: null,
    challenge_type: ChallengeType.YES_NO,
    is_solution_valid: true,
  },
  {
    code: [
      "defmodule Rationing do",
      "  def calculate(energy1, energy2) do",
      "    energy1 + energy2",
      "  end",
      "end",
    ],
    success_response: {
      message: "FALLBACK",
    },
    failure_response: {
      message: "FALLBACK",
    },
    challenge_type: ChallengeType.YES_NO,
    is_solution_valid: true,
  },
  {
    code: [
      "defmodule Patrol do",
      "  def shift_type(hour) do",
      '    if rem(hour, 2) == 0, do: "even", else: "odd"',
      "  end",
      "end",
    ],
    success_response: {
      message: "SUCCESS",
      type: "ONE",
      random: true,
    },
    failure_response: {
      message: "FALLBACK",
    },
    challenge_type: ChallengeType.YES_NO,
    is_solution_valid: true,
  },
  {
    code: [
      "defmodule Inventory do",
      "  def count_humans(list) do",
      "    length(list)",
      "  end",
      "end",
    ],
    success_response: {
      message: "FALLBACK",
    },
    failure_response: {
      message: "FALLBACK",
    },
    challenge_type: ChallengeType.YES_NO,
    is_solution_valid: true,
  },
  {
    code: [
      "defmodule Loyalty do",
      "  def tokens(0), do: 1",
      "  def tokens(n), do: n * tokens(n - 1)",
      "end",
    ],
    success_response: {
      message: "FALLBACK",
    },
    failure_response: {
      message: "FALLBACK",
    },
    challenge_type: ChallengeType.YES_NO,
    is_solution_valid: true,
  },
  {
    code: [
      "defmodule AccessControl do",
      "  def codes(map) do",
      "    new Map.keys(map)",
      "  end",
      "end",
    ],
    error: "undefined function new/1",
    success_response: {
      message: "SUCCESS",
      type: "ONE",
      random: true,
    },
    failure_response: {
      message: "FAILURE",
      type: "ONE",
      random: true,
    },
    challenge_type: ChallengeType.YES_NO,
    is_solution_valid: false,
    timer: 30,
  },
];
