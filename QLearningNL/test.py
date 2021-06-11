actions=[]
for i in range(1,7):
    for a in range(1-19):
        for b in range(1,7):
            if i!=b:
                actions.append("moveCard("+i+","+a+","+b+")")

print(actions)
