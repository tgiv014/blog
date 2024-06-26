---
title: "Project Euler Problem #15 - Addendum"
date: 2021-02-06 00:00:00 -0500
categories: ["Software"]
tags: ["algorithms"]
summary: "Showing a *really* obvious project euler answer that I didn't see before."
flag: "03"
---

_This is an addendum to [this previous post](/blog/project-euler-15)._

## It's learnin' time

While completing advent of code 2020, I learned about [memoization](https://en.wikipedia.org/wiki/Memoization). I realized that this is a perfect problem to apply the technique to. All we need is a hashmap indexed by our tree coordinates that we'll pass in our recursive function. If there's a cached value for the function inputs, we early return the cached value. In our normal return path we save off the calculated value before actually returning it. It's a simple formula for faster processing.

Without further ado:

```rust
use std::collections::HashMap;

#[derive(Hash, Eq, PartialEq, Debug)]
struct Coordinate {
    x: u32,
    y: u32,
}

// The size of our domain in steps
// The grid is NxN steps
// Really, our position grid is N+1xN+1
// [0,0] describes the start and [N,N] describes the end point
static N:u32 = 20;

fn build_node(x:u32, y:u32, cache:&mut HashMap<Coordinate, u64>) -> u64 {
    let c = Coordinate{x,y};
    let mut sum:u64 = 0;
    if cache.contains_key(&c) {
        return cache[&c];
    }
    // If x==y==N, we're at the end point!
    if x == N && y == N {
        return 1;
    }
    // Recurse for each child node if possible
    if x < N {
        sum += build_node(x + 1, y, cache);
    }
    if y < N {
        sum += build_node(x, y + 1, cache);
    }

    cache.insert(c, sum);
    return sum;
}

fn main() {
    let mut cache:HashMap<Coordinate, u64> = HashMap::new();
    let n_ends:u64 = build_node(0, 0, &mut cache);
    println!("Total unique paths: {}", n_ends);
}
```

Now it takes ~5ms to evaluate every path in a 20x20 grid! That's a heck of a lot better than 30min.
