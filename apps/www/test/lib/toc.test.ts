import { generateToCTree } from "@/lib/toc"
import { describe, expect, it } from "vitest"

describe("toc", () => {
  it("basic", () => {
    const headings = [
      { depth: 2, slug: "A", text: "" },
      { depth: 3, slug: "B", text: "" },
      { depth: 3, slug: "C", text: "" },
      { depth: 2, slug: "D", text: "" },
    ]
    const toc = generateToCTree(headings)
    expect(toc).toMatchInlineSnapshot(`
      {
        "children": [
          {
            "children": [
              {
                "children": [],
                "depth": 3,
                "id": "A_B",
                "slug": "B",
                "text": "",
              },
              {
                "children": [],
                "depth": 3,
                "id": "A_C",
                "slug": "C",
                "text": "",
              },
            ],
            "depth": 2,
            "id": "_ROOT__A",
            "slug": "A",
            "text": "",
          },
          {
            "children": [],
            "depth": 2,
            "id": "_ROOT__D",
            "slug": "D",
            "text": "",
          },
        ],
        "depth": 1,
        "id": "_ROOT_",
        "slug": "_ROOT_",
        "text": "",
      }
    `)
  })

  it("should generate a toc tree", () => {
    const headings = [
      { depth: 2, slug: "A", text: "" },
      { depth: 3, slug: "B", text: "" },
      { depth: 3, slug: "C", text: "" },
      { depth: 4, slug: "D", text: "" },
      { depth: 3, slug: "E", text: "" },
      { depth: 4, slug: "F", text: "" },
      { depth: 3, slug: "G", text: "" },
    ]
    const toc = generateToCTree(headings)
    expect(toc).toMatchInlineSnapshot(`
      {
        "children": [
          {
            "children": [
              {
                "children": [],
                "depth": 3,
                "id": "A_B",
                "slug": "B",
                "text": "",
              },
              {
                "children": [
                  {
                    "children": [],
                    "depth": 4,
                    "id": "C_D",
                    "slug": "D",
                    "text": "",
                  },
                ],
                "depth": 3,
                "id": "A_C",
                "slug": "C",
                "text": "",
              },
              {
                "children": [
                  {
                    "children": [],
                    "depth": 4,
                    "id": "E_F",
                    "slug": "F",
                    "text": "",
                  },
                ],
                "depth": 3,
                "id": "A_E",
                "slug": "E",
                "text": "",
              },
              {
                "children": [],
                "depth": 3,
                "id": "A_G",
                "slug": "G",
                "text": "",
              },
            ],
            "depth": 2,
            "id": "_ROOT__A",
            "slug": "A",
            "text": "",
          },
        ],
        "depth": 1,
        "id": "_ROOT_",
        "slug": "_ROOT_",
        "text": "",
      }
    `)
  })
})
