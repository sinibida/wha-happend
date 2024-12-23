alias s := start-dev

# Run development server on tmux (session name: wha-happend-server)
start-dev:
  tmux new-session -s "wha-happend-server" npm run dev