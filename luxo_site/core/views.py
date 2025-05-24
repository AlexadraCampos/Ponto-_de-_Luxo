from django.shortcuts import render
from .models import Produto
from django.shortcuts import get_object_or_404
from django.contrib.auth.decorators import login_required
from django.shortcuts import redirect


def index(request):
    return render(request, 'index.html')

def produtos(request):
    produtos = Produto.objects.all()
    return render(request, 'produtos.html', {'produtos': produtos})


def adicionar_carrinho(request, produto_id):
    if request.method == 'POST':
        carrinho = request.session.get('carrinho', {})
        carrinho[produto_id] = carrinho.get(produto_id, 0) + 1
        request.session['carrinho'] = carrinho
    
    return redirect('index')
