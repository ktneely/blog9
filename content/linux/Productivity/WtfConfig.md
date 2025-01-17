---
date_created: 2023-03-28 19:22:05+00:00
source_application: cherrytree
tags: 
  - tool
  - CLI
title: WtfConfig
date_updated: 2023-03-28 19:22:15+00:00
---


[**wtfutil**](https://wtfutil.com/) is a terminal window based status monitor that can pull from Internet resources like weather and also provide information about processes and usage of the local system.


```
wtf:
  colors:
    border:
      focusable: darkslateblue
      focused: orange
      normal: gray
  grid:
    columns: [32, 32, 32, 32, 90]
    rows: [10, 10, 10, 4, 4, 90]
  refreshInterval: 1
  mods:
    clocks_a:
      colors:
        rows:
          even: "lightblue"
          odd: "white"
      enabled: true
      locations:
        LosAngeles: "America/Los_Angeles"
        Prague: "Europe/Prague"
        Sydney: "Australia/Sydney"
        Toronto: "America/Toronto"
      position:
        top: 0
        left: 1
        height: 1
        width: 1
      refreshInterval: 15
      sort: "alphabetical"
      title: "Clocks A"
      type: "clocks"
    docker:
      type: docker
      enabled: true
      labelColor: lightblue
      position:
        top: 0
        left: 2
        height: 1
        width: 1
      refreshInterval: 5s
    feedreader:
      enabled: true
      feeds:
      - http://feeds.bbci.co.uk/news/rss.xml
      feedLimit: 10
      position:
        top: 2
        left: 1
        width: 3
        height: 1
      refreshInterval: 14400
    ipinfo:
      colors:
        name: "lightblue"
        value: "white"
      enabled: true
      position:
        top: 1
        left: 1
        height: 1
        width: 1
      refreshInterval: 180
    power:
      enabled: true
      position:
        top: 1
        left: 2
        height: 1
        width: 1
      refreshInterval: 15
      title: "⚡️"
    cryptolive:
      enabled: true
      position:
        top: 0
        left: 0
        height: 5
        width: 1
      updateInterval: 15
      currencies:
          BTC:
            displayName: Bitcoin
            to:
              - USD
              - ETH
          ETH:
            displayName: Ethereum
            to:
              - USD
              - BTC
          CRO:
            displayName: Cronos
            to:
              - USD
          ATOM:
            displayName: Atom
            to:
              - USD
          BCH:
            displayName: Bitcoin Cash
            to:
              - USD
          DOT:
            displayName: Polkadot
            to:
              - USD
      top:
        BTC:
            displayName: Bitcoin
            limit: 5
            to:
              - USD
      colors:
        from:
          name: coral
          displayName: grey
        to:
          name: white
          price: green
        top:
          from:
            name: grey
            displayName: coral
          to:
            name: red
            field: white
            value: green
    prettyweather:
      enabled: true
      city: "Mountain View"
      position:
        top: 0
        left: 3
        height: 2
        width: 1
      refreshInterval: 120m
      unit: "m"
      view: 0
      language: "en"
    todoist:	       
      apiKey: "CHANGEME"
      enabled: true
      position:
        top: 3
        left: 1
        height: 3
        width: 3
      projects:
        - ProjectID1
        - ProjectID2
      refreshInterval: 3600
```