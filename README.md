# PairUp

### Real-Time Pair Programming Platform for Technical Interview Preparation

> Practice coding interviews with other developers through live video calls, collaborative coding, and curated DSA challenges.

PairUp helps developers simulate real interview environments by allowing two programmers to join a shared coding session, communicate through video chat, solve coding problems together, and execute code in real time.

---

## Why PairUp?

Most coding platforms are designed for solo practice.

PairUp focuses on **collaborative interview preparation**, enabling users to:

* Find practice partners
* Conduct mock interviews
* Solve DSA problems together
* Share a live code editor
* Communicate through video calls
* Execute code instantly

---

## Features

### Live Video Interviews

Conduct mock interviews using integrated video calls powered by Stream.

### Collaborative Code Editor

Real-time shared Monaco Editor with support for 15+ programming languages.

### Instant Code Execution

Run code directly inside sessions through JDoodle integration.

### Public & Private Rooms

Create interview rooms that anyone can join or invite specific participants.

### Daily Coding Challenge

Get a new random problem every day.

### Progress Tracking

Track solved problems and previous sessions.

### Session Timer

Simulate real interview pressure with optional timers.

---

## 🛠 Tech Stack

| Category         | Technologies                 |
| ---------------- | ---------------------------- |
| Frontend         | React, Tailwind CSS, DaisyUI |
| State Management | TanStack Query               |
| Authentication   | Clerk                        |
| Database         | MongoDB, Mongoose            |
| Backend          | Node.js, Express             |
| Video Calling    | Stream Video SDK             |
| Code Editor      | Monaco Editor                |
| Code Execution   | JDoodle API                  |
| Collaborative Editing | Yjs (CRDT), y-websocket  |
| Realtime Transport | WebSocket (`ws`)           |


## Collaborative Editing

Both participants in a session edit the **same buffer**. This is a real CRDT
(Yjs), not last-write-wins, so simultaneous edits merge cleanly instead of one
person overwriting the other.

### How it works

```
Browser A ──┐                        ┌── Browser B
  Monaco     │                        │   Monaco
    ↕        │                        │     ↕
  Y.Doc ── Y.Text ("code:<lang>") ────│
    ↕                                ↕
  WebsocketProvider (/ws/<sessionId>?token=...)
    ↕                                ↕
        WebSocket server (backend)
                  ↕
              Y.Doc (room per session)
```

* **One room per session.** The room name is the session id, so a session's
  buffer is completely isolated from every other session.
* **Server-side seeding.** When a room is created the server seeds one shared
  buffer per language with the problem's starter code. Only the server ever
  writes the seed, so there is no race where two clients seed the buffer and
  end up with the code twice.
* **Per-language buffers.** Switching language switches which shared buffer is
  bound, so a Python solution never overwrites the JavaScript one.
* **Presence.** Each participant's cursor and selection are shared through
  Yjs awareness, and the editor shows who is in the buffer.
* **Access control.** The WebSocket handshake verifies the Clerk session token
  and rejects anyone who is not the host or participant of that session.

### Running it locally

The collaboration server runs on the backend itself, under `/ws`:

```bash
# backend
npm run dev

# frontend
npm run dev
```

Vite proxies `/ws` through to the backend in development. In production set
`VITE_WS_URL` to your backend's public WebSocket URL, because a static host
cannot proxy WebSocket connections:

```bash
VITE_WS_URL=wss://your-backend.onrender.com/ws
```

### Tests

```bash
cd backend && npm test
```

Runs a two-client convergence test: seeding, propagation, concurrent edits,
late joiners, presence, room isolation and rejected tokens.


## What I Learned

Building PairUp helped me gain hands-on experience with:

* Real-time systems
* Third-party API integration
* Video streaming infrastructure
* Authentication flows
* Collaborative application architecture
* Production-grade MERN development

---

## 👨‍💻 Author

**Suraj Bhatt**

Computer Science Student passionate about building products that help developers learn, collaborate, and prepare for technical interviews.
