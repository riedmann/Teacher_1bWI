# 📂 Fundamental Data Structures: Pros, Cons & Visualization

This document provides a comprehensive overview of common data structures, their characteristics, and their specific use cases.

---

## 1. Array
A collection of items stored at contiguous memory locations. It has a fixed size defined at creation.

### Graphical Explanation
```plantuml
@startuml
title Fixed Array (Size 4)
object "Index 0" as i0
object "Index 1" as i1
object "Index 2" as i2
object "Index 3" as i3

i0 : Data = 10
i1 : Data = 20
i2 : Data = 30
i3 : Data = 40

i0 -[hidden]r- i1
i1 -[hidden]r- i2
i2 -[hidden]r- i3
@enduml