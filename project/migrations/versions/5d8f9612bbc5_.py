"""empty message

Revision ID: 5d8f9612bbc5
Revises: 4a21998ee5fc
Create Date: 2024-05-09 21:58:48.833748

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '5d8f9612bbc5'
down_revision = '4a21998ee5fc'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('product', schema=None) as batch_op:
        batch_op.add_column(sa.Column('count', sa.Integer(), nullable=True))
        batch_op.drop_column('path')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('product', schema=None) as batch_op:
        batch_op.add_column(sa.Column('path', sa.INTEGER(), nullable=True))
        batch_op.drop_column('count')

    # ### end Alembic commands ###
