class OrderedLinkedList extends LinkedList {
    constructor() {
        super()
        this.head = null
    }

append(value) {
    const NovoNo = new Node(value)

    if (this.head == null) {
        this.head = NovoNo;
    } else {
        var node = this.head;
        while (node.next != null) {
            node = node.next  ;
        }
        node.next = NovoNo;
        this.Ordem_Crescente()
        }
    }

Ordem_Crescente() {
    for (var x = this.head; x != null; x = x.next) {
        for (var y = x.next; y != null; y = y.next) {
            if (x.content > y.content) {
                var suporte = x.content;
                x.content = y.content;
                y.content = suporte;
                }
            }       
        }
    }
    inserir(position, value) {
        this.append(value)
        throw new Error("Não é permitido inserir na posição em listas ordenadas")
    }
}