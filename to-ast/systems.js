{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "name": "systems"
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "system1"
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "depends"
                      },
                      "value": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Literal",
                            "value": "system2",
                            "raw": "'system2'"
                          }
                        ]
                      },
                      "kind": "init",
                      "method": false,
                      "shorthand": false,
                      "computed": false
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "IMAGE"
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "key": {
                              "type": "Literal",
                              "value": "DOCKER",
                              "raw": "'DOCKER'"
                            },
                            "value": {
                              "type": "Literal",
                              "value": "DOCKER_REPO",
                              "raw": "'DOCKER_REPO'"
                            },
                            "kind": "init",
                            "method": false,
                            "shorthand": false,
                            "computed": false
                          }
                        ]
                      },
                      "kind": "init",
                      "method": false,
                      "shorthand": false,
                      "computed": false
                    }
                  ]
                },
                "kind": "init",
                "method": false,
                "shorthand": false,
                "computed": false
              }
            ]
          }
        ]
      }
    }
  ]
}