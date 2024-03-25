using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace exercicio_windows_forms
{
    public partial class Form2 : Form
    {
        public Form2()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            Form3 j3 = new Form3();
            j3.Show();
        }

        private void button2_Click(object sender, EventArgs e)
        {
            Form4 j4 = new Form4();
            j4.Show();

        }

        private void button3_Click(object sender, EventArgs e)
        {
            Form5 j5 = new Form5();
            j5.Show();

        }

        private void Form2_Load(object sender, EventArgs e)
        {

        }
    }
}
