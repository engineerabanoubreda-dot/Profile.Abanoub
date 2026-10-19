[Uploading pytorch_NN.ipynb…]()
{
  "nbformat": 4,
  "nbformat_minor": 0,
  "metadata": {
    "colab": {
      "provenance": []
    },
    "kernelspec": {
      "name": "python3",
      "display_name": "Python 3"
    },
    "language_info": {
      "name": "python"
    }
  },
  "cells": [
    {
      "cell_type": "code",
      "execution_count": 4,
      "metadata": {
        "id": "iBdfagEpYp2j"
      },
      "outputs": [],
      "source": [
        "import torch\n",
        "import torch.nn as nn\n",
        "import torch.nn.functional  as f\n",
        "from torch.optim import SGD\n",
        "\n",
        "import matplotlib.pyplot as plt\n",
        "import seaborn as sns\n",
        "\n"
      ]
    },
    {
      "cell_type": "code",
      "source": [
        "class firstnn(nn.Module):\n",
        "    def __init__(self):\n",
        "        super().__init__()\n",
        "\n",
        "        self.w00 = nn.Parameter(torch.tensor(1.1), requires_grad=False)\n",
        "        self.b00 = nn.Parameter(torch.tensor(-0.5), requires_grad=False)\n",
        "\n",
        "        self.w01 = nn.Parameter(torch.tensor(0.6), requires_grad=False)\n",
        "        self.b01 = nn.Parameter(torch.tensor(-1.5), requires_grad=False)\n",
        "\n",
        "        self.w02 = nn.Parameter(torch.tensor(0.5), requires_grad=False)\n",
        "        self.b02 = nn.Parameter(torch.tensor(0.65), requires_grad=False)\n",
        "\n",
        "        self.w11 = nn.Parameter(torch.tensor(1.55), requires_grad=False)\n",
        "        self.w12 = nn.Parameter(torch.tensor(-0.7), requires_grad=False)\n",
        "        self.w13 = nn.Parameter(torch.tensor(1.22), requires_grad=False)\n",
        "\n",
        "        self.w20 = nn.Parameter(torch.tensor(1.6), requires_grad=False)\n",
        "\n",
        "    def forward(self, input):\n",
        "        input_to_layer_01 = input * self.w00 * self.w00 + self.b00\n",
        "        layer_01_output = f.relu(input_to_layer_01)\n",
        "        layer_01_output = layer_01_output * self.w11\n",
        "\n",
        "        input_to_layer_02 = input * self.w01 + self.b01\n",
        "        layer_02_output = f.relu(input_to_layer_02)\n",
        "        layer_02_output = layer_02_output * self.w12\n",
        "\n",
        "        input_to_layer_03 = input * self.w02 + self.b02\n",
        "        layer_03_output = f.relu(input_to_layer_03)\n",
        "        layer_03_output = layer_03_output * self.w13\n",
        "\n",
        "        output = layer_01_output + layer_02_output + layer_03_output\n",
        "        output = f.tanh(output)\n",
        "        output = output * self.w20\n",
        "        return output"
      ],
      "metadata": {
        "id": "Op1DhSnSbF6g"
      },
      "execution_count": 8,
      "outputs": []
    },
    {
      "cell_type": "code",
      "source": [
        "first_model = firstnn()"
      ],
      "metadata": {
        "id": "hh1exlwQBI72"
      },
      "execution_count": 11,
      "outputs": []
    },
    {
      "cell_type": "code",
      "source": [
        "first_model"
      ],
      "metadata": {
        "colab": {
          "base_uri": "https://localhost:8080/"
        },
        "id": "zUDlqzEaBTV5",
        "outputId": "8b64c34f-259b-4fcb-abc4-66bd4050c95b"
      },
      "execution_count": 12,
      "outputs": [
        {
          "output_type": "execute_result",
          "data": {
            "text/plain": [
              "firstnn()"
            ]
          },
          "metadata": {},
          "execution_count": 12
        }
      ]
    },
    {
      "cell_type": "code",
      "source": [
        "for name ,param in first_model.named_parameters():\n",
        " print(name,param.data)"
      ],
      "metadata": {
        "colab": {
          "base_uri": "https://localhost:8080/"
        },
        "id": "9s68RyKkCD1p",
        "outputId": "56fcdabb-f00b-407d-f972-92c1fbfcce04"
      },
      "execution_count": 13,
      "outputs": [
        {
          "output_type": "stream",
          "name": "stdout",
          "text": [
            "w00 tensor(1.1000)\n",
            "b00 tensor(-0.5000)\n",
            "w01 tensor(0.6000)\n",
            "b01 tensor(-1.5000)\n",
            "w02 tensor(0.5000)\n",
            "b02 tensor(0.6500)\n",
            "w11 tensor(1.5500)\n",
            "w12 tensor(-0.7000)\n",
            "w13 tensor(1.2200)\n",
            "w20 tensor(1.6000)\n"
          ]
        }
      ]
    },
    {
      "cell_type": "code",
      "source": [
        "print( first_model(5.1))"
      ],
      "metadata": {
        "colab": {
          "base_uri": "https://localhost:8080/"
        },
        "id": "yZ26nfF_CbT-",
        "outputId": "2cef51a7-27dd-482c-853b-262cf11aec72"
      },
      "execution_count": 14,
      "outputs": [
        {
          "output_type": "stream",
          "name": "stdout",
          "text": [
            "tensor(1.6000)\n"
          ]
        }
      ]
    },
    {
      "cell_type": "code",
      "source": [
        "print( first_model(4.9))"
      ],
      "metadata": {
        "colab": {
          "base_uri": "https://localhost:8080/"
        },
        "id": "lS-WRVzHCsPO",
        "outputId": "fc08e225-3cb1-4e18-ea7d-2b0b28b1bb87"
      },
      "execution_count": 16,
      "outputs": [
        {
          "output_type": "stream",
          "name": "stdout",
          "text": [
            "tensor(1.6000)\n"
          ]
        }
      ]
    },
    {
      "cell_type": "code",
      "source": [
        "true_inputs=torch.linspace(start=0,end=0.5,steps=20)\n",
        "true_inputs\n"
      ],
      "metadata": {
        "colab": {
          "base_uri": "https://localhost:8080/"
        },
        "id": "JRUfPyJaC9ku",
        "outputId": "20c840fa-fce4-4c56-8174-9a628024ea70"
      },
      "execution_count": 19,
      "outputs": [
        {
          "output_type": "execute_result",
          "data": {
            "text/plain": [
              "tensor([0.0000, 0.0263, 0.0526, 0.0789, 0.1053, 0.1316, 0.1579, 0.1842, 0.2105,\n",
              "        0.2368, 0.2632, 0.2895, 0.3158, 0.3421, 0.3684, 0.3947, 0.4211, 0.4474,\n",
              "        0.4737, 0.5000])"
            ]
          },
          "metadata": {},
          "execution_count": 19
        }
      ]
    },
    {
      "cell_type": "code",
      "source": [
        "true_input =torch.linspace(start=1,end=2.5,steps=40)\n",
        "true_inputs"
      ],
      "metadata": {
        "colab": {
          "base_uri": "https://localhost:8080/"
        },
        "id": "6c0NcRG_INN5",
        "outputId": "27abec99-6592-4382-ff5b-5816e07ecaa7"
      },
      "execution_count": 23,
      "outputs": [
        {
          "output_type": "execute_result",
          "data": {
            "text/plain": [
              "tensor([0.0000, 0.0263, 0.0526, 0.0789, 0.1053, 0.1316, 0.1579, 0.1842, 0.2105,\n",
              "        0.2368, 0.2632, 0.2895, 0.3158, 0.3421, 0.3684, 0.3947, 0.4211, 0.4474,\n",
              "        0.4737, 0.5000])"
            ]
          },
          "metadata": {},
          "execution_count": 23
        }
      ]
    },
    {
      "cell_type": "code",
      "source": [
        "true_output=first_model(true_inputs)\n",
        "true_inputs"
      ],
      "metadata": {
        "colab": {
          "base_uri": "https://localhost:8080/"
        },
        "id": "tDWQm978DXCO",
        "outputId": "184936ac-0a57-49a6-d3e1-6cc7d5ccc7fe"
      },
      "execution_count": 24,
      "outputs": [
        {
          "output_type": "execute_result",
          "data": {
            "text/plain": [
              "tensor([0.0000, 0.0263, 0.0526, 0.0789, 0.1053, 0.1316, 0.1579, 0.1842, 0.2105,\n",
              "        0.2368, 0.2632, 0.2895, 0.3158, 0.3421, 0.3684, 0.3947, 0.4211, 0.4474,\n",
              "        0.4737, 0.5000])"
            ]
          },
          "metadata": {},
          "execution_count": 24
        }
      ]
    },
    {
      "cell_type": "code",
      "source": [
        "sns.set(style=\"whitegrid\")\n",
        "\n",
        "sns.lineplot(\n",
        "    x=true_inputs,\n",
        "    y=true_output,\n",
        "    color='blue',\n",
        "    linewidth=3\n",
        ")\n",
        "plt.ylabel('output')\n",
        "plt.xlabel('input')\n",
        "plt.show()"
      ],
      "metadata": {
        "colab": {
          "base_uri": "https://localhost:8080/",
          "height": 458
        },
        "id": "POPmWZLdIy-_",
        "outputId": "13638412-9451-4693-91fe-9b82f977ede4"
      },
      "execution_count": 28,
      "outputs": [
        {
          "output_type": "display_data",
          "data": {
            "text/plain": [
              "<Figure size 640x480 with 1 Axes>"
            ],
            "image/png": "iVBORw0KGgoAAAANSUhEUgAAAkoAAAG5CAYAAABxzRuzAAAAOnRFWHRTb2Z0d2FyZQBNYXRwbG90bGliIHZlcnNpb24zLjEwLjAsIGh0dHBzOi8vbWF0cGxvdGxpYi5vcmcvlHJYcgAAAAlwSFlzAAAPYQAAD2EBqD+naQAATGlJREFUeJzt3X2cjPX+x/HXWLvslpUt5C5r0bLlnpWjEMqRTp2K7iQlrI7cJBWSkNtKKoRE2EMliR+Vc3Sqddweqdwlrfbm1FKKtXaz7Ni5fn9cp9XYGdbszDUzO+/n49GD+V7fufYz39Z6+17f63vZDMMwEBEREZFiyvm7ABEREZFApaAkIiIi4oaCkoiIiIgbCkoiIiIibigoiYiIiLihoCQiIiLihoKSiIiIiBsKSiIiIiJulPd3AcHuq6++wjAMwsPD/V2KiIiIlJDdbsdms9GiRYvz9tOMUikZhoEvNjc3DIOCggKfnFvO0jhbR2NtDY2zNTTO1vDlOJf072/NKJXS7zNJTZo08ep5T548yf79+2nQoAFRUVFePbecpXG2jsbaGhpna2icreHLcd6zZ0+J+mlGSURERMQNBSURERERNxSURERERNxQUBIRERFxQ0FJRERExA0FJRERERE3FJRERERE3FBQEhEREXFDQUlERETEDQUlERERETcUlERERETcUFASERERcUNBSURERAJOfj7MmFGeefNq8Ouv/qujvP++tIiIiEhxdjt07QpbtkQANdm82cG+fWCzWV+LZpREREQkoEycCFu2nH29f385v80qKSiJiIhIwNi0CaZMcW5r1sxB1ar+qUdBSURERAJCTg488AA4HGfbwsIM5sw57beaFJREREQkIAweDJmZzm2PPppFixaGfwpCQUlEREQCwPLlsGyZc9v11xfSp8/P/inofxSURERExK8yM+HRR53bKleGN98sICzMPzX9TkFJRERE/KawEPr0gRMnnNvnzYM6dfx3ye13CkoiIiLiN9Onw7//7dzWpw/ce69/6jlXQG04mZmZycKFC9m1axepqanExcWxbt26C75v5MiR7N69myNHjhAeHs7VV1/No48+yvXXX1/U58cff6RLly7F3tusWTNWrFjh1c8hIiIiF7ZjBzz3nHNbbCzMnu2XclwKqKCUmppKSkoKzZo1w+FwYBglm3Kz2+089NBDxMbGcvr0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Rqlz584kJSXxxRdf0LNnT5o0aUKXLl1YvXq1y/ft2LGDcePG0bZtW1q2bMlTTz1FTk6OU9/4+HhmzZpV7Gt37tyZUaNGFZ1v2LBhADz44IPEx8cTHx/P9u3bffCpRcRXNKMkImVeZmYmw4YNo2fPntxxxx28//77jBo1imuuuYaGDRs69Z04cSLR0dE89thjpKen8/bbb3Po0CGSk5Ox2Wwl/ppt2rShT58+JCcnM2jQIOLi4gCoX7++Vz+biPiWgpKIlHnp6eksW7aM1q1bA9C9e3c6duzIqlWrePrpp536hoeHs3jxYsLDwwGoWbMmL774Ip9++ildunQp8desU6cOrVu3Jjk5mT/96U+0bdvWex9IRCyjS28iUuY1aNCgKCQBxMTEUK9ePX744Ydife+5556ikARw3333Ub58eVJSUiypVUQCi4KSiJR5NWrUKNZWuXLlYmuPAOrWrev0+pJLLqFq1aq6c00kRCkoiUiZZ9VdcIWFhZZ8HRGxjoKSiMgfZGZmOr3+7bff+OWXX5z2ZapcuTInTpxw6ldQUMAvv/zi1HYxi79FJDApKImI/MG7776L3W4vev32229z5swZOnToUNRWp04dvvjiC6f3rVixotiMUmRkJAC5ubk+rFhEfEl3vYmI/IHdbuehhx6ie/fupKens3z5clq1auV0x1uvXr147rnnGDJkCH/605/49ttv2bRpE1WqVHE6V+PGjQkLC2PBggXk5uYSERHBddddx+WXX271xxIRD2lGSUTkD8aNG0f9+vV57bXXWLVqFT169OD11193uox29913M2DAAHbs2MH06dP58ccfeeutt4iKinI6V9WqVZkwYQJHjx7lmWeeYcSIERw8eNDqjyQipWAzDMPwdxEiIv62atUqRo8ezcqVK2nSpIm/yxGRAKEZJRERERE3FJRERERE3FBQEhEREXFDa5RERERE3NCMkoiIiIgbCkoiIiIibigoiYiIiLihoCQiIiLihoKSiIiIiBsKSiIiIiJuKCiJiIiIuKGgJCIiIuKGgpKIiIiIG/8PSCTQ1M3ZZF8AAAAASUVORK5CYII=\n"
          },
          "metadata": {}
        }
      ]
    },
    {
      "cell_type": "code",
      "source": [
        "class Plainfirstnn(nn.Module):\n",
        "    def __init__(self):\n",
        "        super().__init__()\n",
        "\n",
        "        self.w00 = nn.Parameter(torch.tensor(0.0), requires_grad=True)\n",
        "        self.b00 = nn.Parameter(torch.tensor(-0.5), requires_grad=False)\n",
        "\n",
        "        self.w01 = nn.Parameter(torch.tensor(0.6), requires_grad=False)\n",
        "        self.b01 = nn.Parameter(torch.tensor(-1.5), requires_grad=False)\n",
        "\n",
        "        self.w02 = nn.Parameter(torch.tensor(0.0), requires_grad=True)\n",
        "        self.b02 = nn.Parameter(torch.tensor(0.65), requires_grad=False)\n",
        "\n",
        "        self.w11 = nn.Parameter(torch.tensor(1.55), requires_grad=False)\n",
        "        self.w12 = nn.Parameter(torch.tensor(-0.7), requires_grad=False)\n",
        "        self.w13 = nn.Parameter(torch.tensor(1.22), requires_grad=False)\n",
        "\n",
        "        self.w20 = nn.Parameter(torch.tensor(0.0), requires_grad=True)\n",
        "\n",
        "    def forward(self, input):\n",
        "        input_to_layer_01 = input * self.w00 * self.w00 + self.b00\n",
        "        layer_01_output = f.relu(input_to_layer_01)\n",
        "        layer_01_output = layer_01_output * self.w11\n",
        "\n",
        "        input_to_layer_02 = input * self.w01 + self.b01\n",
        "        layer_02_output = f.relu(input_to_layer_02)\n",
        "        layer_02_output = layer_02_output * self.w12\n",
        "\n",
        "        input_to_layer_03 = input * self.w02 + self.b02\n",
        "        layer_03_output = f.relu(input_to_layer_03)\n",
        "        layer_03_output = layer_03_output * self.w13\n",
        "\n",
        "        output = layer_01_output + layer_02_output + layer_03_output\n",
        "        output = f.tanh(output)\n",
        "        output = output * self.w20\n",
        "        return output"
      ],
      "metadata": {
        "id": "j4QlzzuGKdwT"
      },
      "execution_count": 29,
      "outputs": []
    },
    {
      "cell_type": "code",
      "source": [
        "plain_first_nn = Plainfirstnn()"
      ],
      "metadata": {
        "id": "s-wc3D4KMkCk"
      },
      "execution_count": 33,
      "outputs": []
    },
    {
      "cell_type": "code",
      "source": [
        "pred_outputs = plain_first_nn(true_inputs)\n",
        "pred_outputs"
      ],
      "metadata": {
        "colab": {
          "base_uri": "https://localhost:8080/"
        },
        "id": "YMoQ7ZAPOQ8r",
        "outputId": "e18ca636-35e2-4666-ebcc-b80e5499a8aa"
      },
      "execution_count": 37,
      "outputs": [
        {
          "output_type": "execute_result",
          "data": {
            "text/plain": [
              "tensor([0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0.],\n",
              "       grad_fn=<MulBackward0>)"
            ]
          },
          "metadata": {},
          "execution_count": 37
        }
      ]
    },
    {
      "cell_type": "code",
      "source": [
        "sns.set(style=\"whitegrid\")\n",
        "\n",
        "sns.lineplot(\n",
        "    x=true_inputs,\n",
        "    y=pred_outputs.detach(),\n",
        "    color='blue',\n",
        "    linewidth=3\n",
        ")\n",
        "plt.ylabel('output')\n",
        "plt.xlabel('input')\n",
        "plt.show()"
      ],
      "metadata": {
        "colab": {
          "base_uri": "https://localhost:8080/",
          "height": 458
        },
        "id": "MvfKvsB8OxfO",
        "outputId": "3d418f13-4258-4b65-ba04-29657b2b37b0"
      },
      "execution_count": 41,
      "outputs": [
        {
          "output_type": "display_data",
          "data": {
            "text/plain": [
              "<Figure size 640x480 with 1 Axes>"
            ],
            "image/png": "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iouLG10nqd7auLg47d+/X0ePHjVfrI3522ecGZN9Likp0Y8//qi4uDiTJbYKze2zZVk6fvy4Dh48qPz8fH377bcaOXJkoMq1reb0uba2VjNmzNCf/vQnXXjhhYEss1Vo7uf0P/7xD/3ud79TcnKyMjMz9c033wSqVO65soOKigo5nc564y6XS263u9F1YWFhateunc+40+mUZVlyu91q37698Xrtyt8+48yY6rNlWXr88cd14YUX6g9/+IPJEluF5vb5zTff1JQpUyRJERERmjNnjpKTk43XaXfN6fOrr76q6upqjR49OkDVtS7N6fXAgQOVlJSk6Oho7dmzRwsWLNDtt9+ud955JyD3HxOuANhSXl6ePvroI7300kuKiIg42+W0OoMGDVLPnj118OBBFRYW6oEHHtC8efM0YMCAs11aq/Djjz9q7ty5euqppwJ3UzW8Tv5DQZL69Omj1NRUpaenKz8/X7m5ucbfj3BlA06nU5WVlfXG3W63XC5Xo+tqamp07Ngxn7NXFRUVcjgcja49F/nbZ5wZE31esWKF5s+fryeeeEL9+vUzXWKr0Nw+R0ZGer8DMy0tTW63W08//TTh6hf87fPzzz+vhIQE9enTRxUVFZKk48eP6/jx46qoqFBERES9ewzPdSb/jr7wwgt1+eWX68svvzRVng/+z9lAbGxsvevJlZWVKisrq3f9+ZfrpBP3pfTs2dM7XlxcrOjoaC4J/oK/fcaZaW6f161bp9zcXI0fP17Dhg0LVJm2Z/rz+dJLL+UbYRrgb59LSkq0detWXXHFFfVeu+KKK7R48WKlpaUZr9fO7PR3NDe020BaWpo+/PBD779uJKmwsFBt2rRRamrqKdelpKSoY8eOWrNmjXfM4/Fo7dq1/KFtgL99xplpTp+3bNmiiRMnavjw4crOzg50qbZm+vP5k08+4dl4DfC3z5MnT9ayZct8fvXs2VO9e/fWsmXLlJSUFIzybcXk5/SBAwf0ySefqFevXqbLlMSZK1vIyMhQQUGBsrOzlZWVpQMHDmj27NnKyMhQly5dvPNGjRql/fv3a926dZKkdu3aKSsrS3l5eYqMjFSPHj302muv6dChQxo3btzZOpwWy98+S9IXX3yhffv2qby8XJL02WefSTpxaeXKK68M7oG0cP72effu3crOzla3bt108803+/ykgcjISP3mN78J9qG0aP72+b//+7/1zjvv6Nprr9VFF10kt9utVatWaePGjXr22WfP1uG0WP72OTExsd5eTqdTERER6tu3b9DqtxN/e71q1Spt2LBBAwYM0IUXXqg9e/Zo0aJFCgkJ0ZgxYwJSK+HKBlwul5YuXaoZM2YoOztbHTp00LBhwzRhwgSfeXV1daqtrfUZy8zMlGVZWrJkicrLy5WYmKj8/Hz+BdqA5vT5lVde0dtvv+39eMmSJZKkK6+8UgUFBYEv3kb87fNnn32myspKVVZW6rbbbvOZe8stt2jWrFlBqd8u/O1zTEyMampq9Mwzz+jgwYM677zzlJCQoIKCAv6h0IDm/L2BM+Nvr7t27arvv/9eM2fOVGVlpTp16qSrrrpK48ePD9jXQodlWVZAdgYAADgHcc8VAACAQYQrAAAAgwhXAAAABhGuAAAADCJcAQAAGES4AgAAMIhwBQAAYBDhCsA5b+XKlUpISNDevXvPdikAWgHCFQC0ILt27VJeXh5BD7AxwhWAc97NN9+szz//XL/+9a/PdinatWuX5s2bp3379p3tUgD4iZ8tCOCcFxISopCQkLNdBoBWgjNXAM55v7znauDAgcrKytK2bds0bNgw9erVS4MGDdI777zT4LqtW7dq6tSp6tu3r1JSUvTwww/L7Xb7zE1ISFBeXl699x44cKD+8pe/ePf785//LEm6++67lZCQoISEBG3ZsiUARw0gUDhzBQAN+Pbbb/XnP/9Zw4YN0y233KK33npLf/nLX3TppZfq4osv9pn72GOPyel06v7771dJSYlee+017d+/XwUFBXI4HE1+zyuuuEJ33XWXCgoK9Kc//UmxsbGSpLi4OKPHBiCwCFcA0ICSkhK98sor6tOnjyQpPT1dAwYM0MqVK/XII4/4zA0NDdXLL7+s0NBQSVJ0dLSefvpprV+/XoMGDWrye8bExKhPnz4qKCjQ1Vdfrb59+5o7IABBw2VBAGhAfHy8N1hJUmRkpLp37649e/bUmzty5EhvsJKk2267TW3bttUHH3wQlFoBtCyEKwBowEUXXVRvzOVy1buXSpJ++9vf+nzcoUMHRUVF8R1/wDmKcAUADQjWdw/W1tYG5X0ABA/hCgCa6dtvv/X5+MiRIyorK/N5bpbL5VJFRYXPvJqaGpWVlfmMnckN8ABaJsIVADTT66+/Lo/H4/34tdde0/Hjx5WWluYdi4mJ0bZt23zWrVixot6Zq/DwcElSZWVlACsGEEh8tyAANJPH49Ho0aOVnp6ukpISvfrqq7r88st9vlNw+PDhmjZtmnJycnT11Vfr66+/1saNG3Xeeef57JWYmKiQkBAtXrxYlZWVCgsL01VXXaXzzz8/2IcFwE+cuQKAZpo6dari4uI0d+5crVy5Un/4wx/0wgsv+FziGzFihDIzM7V161Y99dRT2rt3r/7+978rIiLCZ6+oqChNnz5dP/74ox599FFNnDhRu3btCvYhAWgGh2VZ1tkuAgDsaOXKlfrrX/+qN998U7169Trb5QBoIThzBQAAYBDhCgAAwCDCFQAAgEHccwUAAGAQZ64AAAAMIlwBAAAYRLgCAAAwiHAFAABgEOEKAADAIMIVAACAQYQrAAAAgwhXAAAABhGuAAAADPp/s1iIayDqWxsAAAAASUVORK5CYII=\n"
          },
          "metadata": {}
        }
      ]
    },
    {
      "cell_type": "code",
      "source": [
        "optomizer=SGD(plain_first_nn.parameters(),lr=0.01)\n",
        "loss = nn.MSEloss()"
      ],
      "metadata": {
        "id": "ua07AJ8uT1Kf"
      },
      "execution_count": null,
      "outputs": []
    },
    {
      "cell_type": "code",
      "source": [
        "optimizer = SGD(plain_first_nn.parameters(), lr=0.01)\n",
        "loss = nn.MSELoss()\n",
        "\n",
        "for epoch in range(100):\n",
        "    total_loss = 0\n",
        "    for i in range(len(true_inputs)):\n",
        "        input_i = true_inputs[i]\n",
        "        true_output_i = true_output[i]\n",
        "        pred_output = plain_first_nn(input_i)\n",
        "        pred_output_i = pred_output\n",
        "\n",
        "        loss_value = loss(pred_output_i, true_output_i)\n",
        "\n",
        "        loss_value.backward()\n",
        "        total_loss += loss_value.item()\n",
        "        optimizer.step()\n",
        "        optimizer.zero_grad()\n",
        "    print(\"Epoch\", epoch, \"Total Loss\", total_loss)"
      ],
      "metadata": {
        "colab": {
          "base_uri": "https://localhost:8080/"
        },
        "id": "ckFbNX_bUp6L",
        "outputId": "5b9dc04f-230b-4253-cb2e-f576d2fd3ac5"
      },
      "execution_count": 43,
      "outputs": [
        {
          "output_type": "stream",
          "name": "stdout",
          "text": [
            "Epoch 0 Total Loss 24.028228044509888\n",
            "Epoch 1 Total Loss 16.86196196079254\n",
            "Epoch 2 Total Loss 11.723746448755264\n",
            "Epoch 3 Total Loss 8.056638300418854\n",
            "Epoch 4 Total Loss 5.470435917377472\n",
            "Epoch 5 Total Loss 3.6732853651046753\n",
            "Epoch 6 Total Loss 2.443045236170292\n",
            "Epoch 7 Total Loss 1.6125011071562767\n",
            "Epoch 8 Total Loss 1.0586158279329538\n",
            "Epoch 9 Total Loss 0.6930854059755802\n",
            "Epoch 10 Total Loss 0.4539867118000984\n",
            "Epoch 11 Total Loss 0.2987483972683549\n",
            "Epoch 12 Total Loss 0.19858555006794631\n",
            "Epoch 13 Total Loss 0.1342997545725666\n",
            "Epoch 14 Total Loss 0.09322437769151293\n",
            "Epoch 15 Total Loss 0.06707927520398016\n",
            "Epoch 16 Total Loss 0.05049094912601504\n",
            "Epoch 17 Total Loss 0.039992967715988925\n",
            "Epoch 18 Total Loss 0.03336043909155251\n",
            "Epoch 19 Total Loss 0.029171683792014846\n",
            "Epoch 20 Total Loss 0.026522095789005107\n",
            "Epoch 21 Total Loss 0.024837503795652083\n",
            "Epoch 22 Total Loss 0.02375552783553303\n",
            "Epoch 23 Total Loss 0.023047384613974486\n",
            "Epoch 24 Total Loss 0.022570052928017503\n",
            "Epoch 25 Total Loss 0.022234118886558463\n",
            "Epoch 26 Total Loss 0.021983751148866304\n",
            "Epoch 27 Total Loss 0.021784849059088174\n",
            "Epoch 28 Total Loss 0.021616249720977976\n",
            "Epoch 29 Total Loss 0.021465453362282005\n",
            "Epoch 30 Total Loss 0.02132471389819557\n",
            "Epoch 31 Total Loss 0.021189512203363847\n",
            "Epoch 32 Total Loss 0.02105739890566838\n",
            "Epoch 33 Total Loss 0.02092722559791582\n",
            "Epoch 34 Total Loss 0.02079784426304343\n",
            "Epoch 35 Total Loss 0.020669340485952148\n",
            "Epoch 36 Total Loss 0.020541323460989247\n",
            "Epoch 37 Total Loss 0.020414207287458908\n",
            "Epoch 38 Total Loss 0.020287691427725463\n",
            "Epoch 39 Total Loss 0.020162015356291363\n",
            "Epoch 40 Total Loss 0.020037330218769966\n",
            "Epoch 41 Total Loss 0.01991354175595461\n",
            "Epoch 42 Total Loss 0.019791034398451757\n",
            "Epoch 43 Total Loss 0.01966970034334281\n",
            "Epoch 44 Total Loss 0.01954955223777688\n",
            "Epoch 45 Total Loss 0.01943055875985067\n",
            "Epoch 46 Total Loss 0.01931296383014569\n",
            "Epoch 47 Total Loss 0.01919666358050165\n",
            "Epoch 48 Total Loss 0.01908159725871883\n",
            "Epoch 49 Total Loss 0.01896786960504926\n",
            "Epoch 50 Total Loss 0.018855520587578667\n",
            "Epoch 51 Total Loss 0.018744406090391408\n",
            "Epoch 52 Total Loss 0.018634675524026534\n",
            "Epoch 53 Total Loss 0.018526092319973486\n",
            "Epoch 54 Total Loss 0.018418915499879063\n",
            "Epoch 55 Total Loss 0.018312951706661806\n",
            "Epoch 56 Total Loss 0.01820820668876877\n",
            "Epoch 57 Total Loss 0.018104796822058233\n",
            "Epoch 58 Total Loss 0.01800257839755659\n",
            "Epoch 59 Total Loss 0.017901447647659552\n",
            "Epoch 60 Total Loss 0.01780164908404913\n",
            "Epoch 61 Total Loss 0.01770292903142945\n",
            "Epoch 62 Total Loss 0.017605448925905876\n",
            "Epoch 63 Total Loss 0.017509111489971474\n",
            "Epoch 64 Total Loss 0.01741384087551978\n",
            "Epoch 65 Total Loss 0.01731974412928139\n",
            "Epoch 66 Total Loss 0.017226666179794847\n",
            "Epoch 67 Total Loss 0.017134702214661957\n",
            "Epoch 68 Total Loss 0.01704382359844203\n",
            "Epoch 69 Total Loss 0.016953878572394387\n",
            "Epoch 70 Total Loss 0.016865102748170102\n",
            "Epoch 71 Total Loss 0.01677727010428498\n",
            "Epoch 72 Total Loss 0.01669054266403691\n",
            "Epoch 73 Total Loss 0.016604666086095676\n",
            "Epoch 74 Total Loss 0.0165198131849138\n",
            "Epoch 75 Total Loss 0.016435969947451667\n",
            "Epoch 76 Total Loss 0.016353086943126982\n",
            "Epoch 77 Total Loss 0.016271049556053185\n",
            "Epoch 78 Total Loss 0.0161900795415022\n",
            "Epoch 79 Total Loss 0.01610995996315978\n",
            "Epoch 80 Total Loss 0.016030683335884532\n",
            "Epoch 81 Total Loss 0.015952298186675762\n",
            "Epoch 82 Total Loss 0.015874805991188623\n",
            "Epoch 83 Total Loss 0.015798203307895164\n",
            "Epoch 84 Total Loss 0.015722440042736707\n",
            "Epoch 85 Total Loss 0.01564746107578685\n",
            "Epoch 86 Total Loss 0.015573324738397787\n",
            "Epoch 87 Total Loss 0.015500074197007052\n",
            "Epoch 88 Total Loss 0.0154276706471137\n",
            "Epoch 89 Total Loss 0.01535585326837463\n",
            "Epoch 90 Total Loss 0.015284960408280313\n",
            "Epoch 91 Total Loss 0.015214814814498823\n",
            "Epoch 92 Total Loss 0.015145542037316773\n",
            "Epoch 93 Total Loss 0.015076866257913935\n",
            "Epoch 94 Total Loss 0.015008904963906389\n",
            "Epoch 95 Total Loss 0.014941811838070862\n",
            "Epoch 96 Total Loss 0.014875358714562026\n",
            "Epoch 97 Total Loss 0.014809638420047122\n",
            "Epoch 98 Total Loss 0.014744675776455551\n",
            "Epoch 99 Total Loss 0.014680323691209196\n"
          ]
        }
      ]
    },
    {
      "cell_type": "code",
      "source": [
        "pred_outputs = plain_first_nn(true_inputs)\n",
        "pred_outputs"
      ],
      "metadata": {
        "colab": {
          "base_uri": "https://localhost:8080/"
        },
        "id": "ZP6Kn3U7X_Vg",
        "outputId": "b7c097e2-3247-4af3-c316-e342884ec41c"
      },
      "execution_count": 44,
      "outputs": [
        {
          "output_type": "execute_result",
          "data": {
            "text/plain": [
              "tensor([1.0818, 1.0944, 1.1067, 1.1188, 1.1307, 1.1424, 1.1538, 1.1651, 1.1761,\n",
              "        1.1869, 1.1975, 1.2079, 1.2180, 1.2280, 1.2377, 1.2473, 1.2567, 1.2658,\n",
              "        1.2748, 1.2836], grad_fn=<MulBackward0>)"
            ]
          },
          "metadata": {},
          "execution_count": 44
        }
      ]
    },
    {
      "cell_type": "code",
      "source": [
        "sns.set(style=\"whitegrid\")\n",
        "\n",
        "sns.lineplot(\n",
        "    x=true_inputs,\n",
        "    y=pred_outputs.detach(),\n",
        "    color='blue',\n",
        "    linewidth=3\n",
        ")\n",
        "plt.ylabel('output')\n",
        "plt.xlabel('input')\n",
        "plt.show()"
      ],
      "metadata": {
        "colab": {
          "base_uri": "https://localhost:8080/",
          "height": 458
        },
        "id": "T5M5z3OUYQQs",
        "outputId": "b011d3de-d6d8-4925-833b-04d02301ed4f"
      },
      "execution_count": 45,
      "outputs": [
        {
          "output_type": "display_data",
          "data": {
            "text/plain": [
              "<Figure size 640x480 with 1 Axes>"
            ],
            "image/png": "iVBORw0KGgoAAAANSUhEUgAAAlQAAAG5CAYAAABIqqroAAAAOnRFWHRTb2Z0d2FyZQBNYXRwbG90bGliIHZlcnNpb24zLjEwLjAsIGh0dHBzOi8vbWF0cGxvdGxpYi5vcmcvlHJYcgAAAAlwSFlzAAAPYQAAD2EBqD+naQAAWfxJREFUeJzt3XlcVPX+x/HXgCC4oFK5bwnmkvuG3q5LqCVamaalLdJV04rU0upnWV4zLctskYrKNMPrWrlcUSnKLi0maSVqmbmBivdqFxUxQZaZ3x8nuQ4zKgzMYQbez8ejh875nnP4zDfUN9/zne/XYrPZbIiIiIiIy3zKugARERERb6dAJSIiIlJCClQiIiIiJaRAJSIiIlJCClQiIiIiJaRAJSIiIlJCClQiIiIiJaRAJSIiIlJClcq6gIrgp59+wmaz4efnV9aliIiISBHl5uZisVjo2LHjFc/VCJUJbDYb7lqQ3mazkZOT47b7i0H9bA71sznUz+ZQP5vHXX1dnH+/NUJlggsjU23bti31e587d449e/YQGhpKlSpVSv3+YlA/m0P9bA71sznUz+ZxV1/v2rWryOdqhEpERESkhBSoREREREpIgUpERESkhBSoREREREpIgUpERESkhBSoREREREpIgUpERESkhBSoREREREpIgUpERESkhBSoREREREpIgUpERESkhBSoREREREpImyOLiIiIV7LZID4eNm3yo0mTGrRsWXa1KFCJiIiI1zlwAKKi4NNPAfyAUOrVO8/dd5dNPXrkJyIiIl7j/Hl4/nm4/voLYep/vv227GKNRqhERETEK2zeDA8/DHv3Orb5+Ni46aZ8jNEq82mESkRERDza8eNw333Qt6/zMFWvnpWXXz5A//5W84v7kwKViIiIeCSrFd55B1q2hH/8w7HdxwcefRR+/DGbPn0yTK/vYnrkJyIiIh5nxw548EFISnLe3q2bEbY6doRz5yAtzdTyHGiESkRERDxGZiZMngydOzsPUzVqQEwMbNlihClPoREqERERKXM2G6xeDZMmXXq06Z574JVXoG5dc2srCgUqERERKVOHDsEjj8DGjc7br7sO3n7bmJTuqfTIT0RERMpETg68+KKxppSzMFW5MsycCTt3enaYAg8boUpNTWXhwoUkJyezb98+mjVrRlxc3GWvOXHiBIsXL+bbb7/l8OHDVK9e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N29ud+7MmTMJCgrikUce4dChQyxfvpxjx46xZMkSLBZLkb9m165due+++1iyZAkPPvggzZo1AyAkJKRU35uIuJ8ClYgIcOjQIZYuXUqXLl0AiIiIoHfv3qxevZr/+7//szvXz8+PxYsX4+fnB0D9+vWZO3cumzdvpm/fvkX+mo0aNaJLly4sWbKEv/zlL4SFhZXeGxIRU+mRn4gIEBoaWhCmAIKDg7n22ms5cuSIw7l33XVXQZgCGDlyJJUqVSIxMdGUWkXE8yhQiYgA9erVczhWo0YNh7lRAE2aNLF7XbVqVa655hp9Uk+kAlOgEhEB0z71l5+fb8rXERFzKVCJiBRTamqq3es//viD33//3W5dqxo1anDmzBm783Jycvj999/tjhVnEruIeC4FKhGRYlq5ciW5ubkFr5cvX05eXh69evUqONaoUSO2b99ud92qVascRqgCAwMByMzMdGPFIuJu+pSfiEgx5ebmcv/99xMREcGhQ4dYtmwZnTt3tvuE3/Dhw/n73//OhAkT+Mtf/sKvv/7KN998Q61atezu1apVK3x9fVmwYAGZmZn4+/vTvXt3rrrqKrPfloiUgEaoRESKafr06YSEhDB//nxWr17NoEGDePvtt+0e391555088MADbNu2jZdeeomjR4/ywQcfUKVKFbt7XXPNNTz33HOkp6czbdo0Jk+ezP79+81+SyJSQhabzWYr6yJERLzB6tWreeqpp/j4449p27ZtWZcjIh5EI1QiIiIiJaRAJSIiIlJCClQiIiIiJaQ5VCIiIiIlpBEqERERkRJSoBIREREpIQUqERERkRJSoBIREREpIQUqERERkRJSoBIREREpIQUqERERkRJSoBIREREpIQUqERERkRL6f8ujkvnI5PoPAAAAAElFTkSuQmCC\n"
          },
          "metadata": {}
        }
      ]
    },
    {
      "cell_type": "code",
      "source": [
        "plain_first_nn.w00"
      ],
      "metadata": {
        "colab": {
          "base_uri": "https://localhost:8080/"
        },
        "id": "pU9WBh09YrEU",
        "outputId": "afe23ef9-afac-40e6-8565-e8894f1e7484"
      },
      "execution_count": 46,
      "outputs": [
        {
          "output_type": "execute_result",
          "data": {
            "text/plain": [
              "Parameter containing:\n",
              "tensor(0., requires_grad=True)"
            ]
          },
          "metadata": {},
          "execution_count": 46
        }
      ]
    },
    {
      "cell_type": "code",
      "source": [
        "plain_first_nn.w02"
      ],
      "metadata": {
        "colab": {
          "base_uri": "https://localhost:8080/"
        },
        "id": "pBrz2FoRY4PZ",
        "outputId": "60f7b2b1-10a8-4dd2-df9a-fbcbef97d5b4"
      },
      "execution_count": 47,
      "outputs": [
        {
          "output_type": "execute_result",
          "data": {
            "text/plain": [
              "Parameter containing:\n",
              "tensor(0.4274, requires_grad=True)"
            ]
          },
          "metadata": {},
          "execution_count": 47
        }
      ]
    },
    {
      "cell_type": "code",
      "source": [
        "plain_first_nn.w20"
      ],
      "metadata": {
        "colab": {
          "base_uri": "https://localhost:8080/"
        },
        "id": "S1LQRAm7Y-eY",
        "outputId": "b217f6e8-79ac-4a72-bae3-64f7b8a113cb"
      },
      "execution_count": 48,
      "outputs": [
        {
          "output_type": "execute_result",
          "data": {
            "text/plain": [
              "Parameter containing:\n",
              "tensor(1.6388, requires_grad=True)"
            ]
          },
          "metadata": {},
          "execution_count": 48
        }
      ]
    }
  ]
}
